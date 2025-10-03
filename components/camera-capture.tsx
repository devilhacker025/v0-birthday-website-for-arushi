"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

export function CameraCapture() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [shots, setShots] = useState<string[]>([])
  const [isCapturing, setIsCapturing] = useState(false)
  const [cameraReady, setCameraReady] = useState(false)

  useEffect(() => {
    let stream: MediaStream | null = null
    const start = async () => {
      try {
        // Request highest quality camera
        stream = await navigator.mediaDevices.getUserMedia({ 
          video: { 
            facingMode: "user",
            width: { ideal: 1920, min: 1280 },
            height: { ideal: 1080, min: 720 },
            frameRate: { ideal: 30 }
          } 
        })
        if (videoRef.current) {
          videoRef.current.srcObject = stream
          await videoRef.current.play()
          setCameraReady(true)
        }
      } catch (error) {
        console.error("Camera access failed:", error)
        // Fallback to standard resolution
        try {
          stream = await navigator.mediaDevices.getUserMedia({ 
            video: { facingMode: "user" } 
          })
          if (videoRef.current) {
            videoRef.current.srcObject = stream
            await videoRef.current.play()
            setCameraReady(true)
          }
        } catch {
          // ignore
        }
      }
    }
    start()
    return () => {
      stream?.getTracks().forEach((t) => t.stop())
    }
  }, [])

  const applyInstagramFilter = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    const imageData = ctx.getImageData(0, 0, width, height)
    const data = imageData.data

    // Instagram-style filter: warm tones, enhanced contrast, slight vignette
    for (let i = 0; i < data.length; i += 4) {
      // Enhance contrast and brightness
      data[i] = Math.min(255, Math.max(0, (data[i] - 128) * 1.3 + 128 + 10))     // Red - warmer
      data[i + 1] = Math.min(255, Math.max(0, (data[i + 1] - 128) * 1.2 + 128 + 5)) // Green
      data[i + 2] = Math.min(255, Math.max(0, (data[i + 2] - 128) * 1.1 + 128))     // Blue - cooler
      
      // Enhance saturation
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3
      const saturationFactor = 1.4
      data[i] = Math.min(255, Math.max(0, avg + (data[i] - avg) * saturationFactor))
      data[i + 1] = Math.min(255, Math.max(0, avg + (data[i + 1] - avg) * saturationFactor))
      data[i + 2] = Math.min(255, Math.max(0, avg + (data[i + 2] - avg) * saturationFactor))
    }

    ctx.putImageData(imageData, 0, 0)
    
    // Add subtle vignette effect
    const gradient = ctx.createRadialGradient(width/2, height/2, 0, width/2, height/2, Math.max(width, height)/2)
    gradient.addColorStop(0, 'rgba(0,0,0,0)')
    gradient.addColorStop(0.7, 'rgba(0,0,0,0)')
    gradient.addColorStop(1, 'rgba(0,0,0,0.3)')
    
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, width, height)
  }

  const takePhoto = async () => {
    if (!videoRef.current || !canvasRef.current || shots.length >= 4) return
    
    setIsCapturing(true)
    
    // Add capture animation delay
    await new Promise(resolve => setTimeout(resolve, 300))
    
    const video = videoRef.current
    const canvas = canvasRef.current
    
    // High quality capture - 9:16 aspect ratio
    const targetWidth = 1080
    const targetHeight = 1920
    canvas.width = targetWidth
    canvas.height = targetHeight
    
    const ctx = canvas.getContext("2d")
    if (!ctx) {
      setIsCapturing(false)
      return
    }

    // Calculate crop area for 9:16 aspect ratio from video
    const videoAspect = video.videoWidth / video.videoHeight
    const targetAspect = 9 / 16
    
    let sourceX = 0, sourceY = 0, sourceWidth = video.videoWidth, sourceHeight = video.videoHeight
    
    if (videoAspect > targetAspect) {
      // Video is wider, crop horizontally
      sourceWidth = video.videoHeight * targetAspect
      sourceX = (video.videoWidth - sourceWidth) / 2
    } else {
      // Video is taller, crop vertically
      sourceHeight = video.videoWidth / targetAspect
      sourceY = (video.videoHeight - sourceHeight) / 2
    }

    // Enable image smoothing for better quality
    ctx.imageSmoothingEnabled = true
    ctx.imageSmoothingQuality = 'high'

    // Draw the cropped video frame to canvas (mirror it)
    ctx.save()
    ctx.scale(-1, 1) // Mirror horizontally
    ctx.drawImage(
      video,
      sourceX, sourceY, sourceWidth, sourceHeight,
      -targetWidth, 0, targetWidth, targetHeight
    )
    ctx.restore()

    // Apply Instagram-style filter
    applyInstagramFilter(ctx, targetWidth, targetHeight)

    // Convert to high-quality image
    const url = canvas.toDataURL("image/jpeg", 0.92)
    setShots((s) => [...s, url])
    setIsCapturing(false)
  }

  const createInstagramCollage = () => {
    if (shots.length === 0) return
    
    // Instagram story size: 1080x1920
    const canvas = document.createElement("canvas")
    const collageWidth = 1080
    const collageHeight = 1920
    canvas.width = collageWidth
    canvas.height = collageHeight
    
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Create beautiful gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, collageHeight)
    gradient.addColorStop(0, '#ff9a9e')
    gradient.addColorStop(0.3, '#fecfef')
    gradient.addColorStop(0.7, '#fecfef')
    gradient.addColorStop(1, '#ff9a9e')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, collageWidth, collageHeight)

    // Add decorative pattern
    ctx.fillStyle = 'rgba(255,255,255,0.1)'
    for (let i = 0; i < 50; i++) {
      const x = Math.random() * collageWidth
      const y = Math.random() * collageHeight
      const size = Math.random() * 20 + 5
      ctx.beginPath()
      ctx.arc(x, y, size, 0, Math.PI * 2)
      ctx.fill()
    }

    const imgs = shots.map((src) => {
      const img = new Image()
      img.crossOrigin = "anonymous"
      img.src = src
      return img
    })

    const onAllLoad = () => {
      // Layout photos in Instagram collage style
      if (shots.length === 1) {
        // Single photo - centered
        const photoSize = Math.min(collageWidth * 0.8, collageHeight * 0.6)
        const x = (collageWidth - photoSize) / 2
        const y = (collageHeight - photoSize) / 2
        
        // Add white frame
        ctx.fillStyle = 'white'
        ctx.fillRect(x - 20, y - 20, photoSize + 40, photoSize + 40)
        ctx.shadowColor = 'rgba(0,0,0,0.3)'
        ctx.shadowBlur = 20
        ctx.drawImage(imgs[0], x, y, photoSize, photoSize)
        
      } else if (shots.length === 2) {
        // Two photos - side by side
        const photoWidth = (collageWidth - 60) / 2
        const photoHeight = photoWidth * (16/9)
        const y = (collageHeight - photoHeight) / 2
        
        [0, 1].forEach((i) => {
          const x = 20 + i * (photoWidth + 20)
          ctx.fillStyle = 'white'
          ctx.fillRect(x - 10, y - 10, photoWidth + 20, photoHeight + 20)
          ctx.shadowColor = 'rgba(0,0,0,0.2)'
          ctx.shadowBlur = 15
          ctx.drawImage(imgs[i], x, y, photoWidth, photoHeight)
        })
        
      } else if (shots.length === 3) {
        // Three photos - one large, two small
        const largeWidth = collageWidth * 0.6
        const largeHeight = largeWidth * (16/9)
        const smallWidth = collageWidth * 0.35
        const smallHeight = smallWidth * (16/9)
        
        // Large photo
        const largeX = 20
        const largeY = (collageHeight - largeHeight) / 2
        ctx.fillStyle = 'white'
        ctx.fillRect(largeX - 10, largeY - 10, largeWidth + 20, largeHeight + 20)
        ctx.shadowColor = 'rgba(0,0,0,0.2)'
        ctx.shadowBlur = 15
        ctx.drawImage(imgs[0], largeX, largeY, largeWidth, largeHeight)
        
        // Small photos
        const smallX = largeX + largeWidth + 25
        [1, 2].forEach((i) => {
          const smallY = largeY + (i - 1) * (smallHeight + 15)
          ctx.fillStyle = 'white'
          ctx.fillRect(smallX - 10, smallY - 10, smallWidth + 20, smallHeight + 20)
          ctx.shadowColor = 'rgba(0,0,0,0.2)'
          ctx.shadowBlur = 15
          ctx.drawImage(imgs[i], smallX, smallY, smallWidth, smallHeight)
        })
        
      } else if (shots.length === 4) {
        // Four photos - 2x2 grid
        const photoWidth = (collageWidth - 60) / 2
        const photoHeight = (collageHeight - 200) / 2
        
        shots.forEach((_, i) => {
          const row = Math.floor(i / 2)
          const col = i % 2
          const x = 20 + col * (photoWidth + 20)
          const y = 100 + row * (photoHeight + 20)
          
          // Add white frame with shadow
          ctx.fillStyle = 'white'
          ctx.fillRect(x - 15, y - 15, photoWidth + 30, photoHeight + 30)
          ctx.shadowColor = 'rgba(0,0,0,0.25)'
          ctx.shadowBlur = 20
          ctx.shadowOffsetY = 5
          ctx.drawImage(imgs[i], x, y, photoWidth, photoHeight)
        })
      }

      // Reset shadow
      ctx.shadowColor = 'transparent'
      ctx.shadowBlur = 0
      ctx.shadowOffsetY = 0

      // Add beautiful title
      ctx.fillStyle = 'white'
      ctx.font = 'bold 48px Arial'
      ctx.textAlign = 'center'
      ctx.strokeStyle = 'rgba(0,0,0,0.3)'
      ctx.lineWidth = 2
      ctx.strokeText('Arushi\'s Beautiful Moments ✨', collageWidth/2, 60)
      ctx.fillText('Arushi\'s Beautiful Moments ✨', collageWidth/2, 60)

      // Add bottom text
      ctx.font = '24px Arial'
      ctx.fillStyle = 'rgba(255,255,255,0.9)'
      ctx.fillText('Made with love 💕', collageWidth/2, collageHeight - 30)

      const url = canvas.toDataURL("image/jpeg", 0.95)
      const a = document.createElement("a")
      a.href = url
      a.download = `arushi-instagram-collage-${Date.now()}.jpg`
      a.click()
    }

    let loaded = 0
    imgs.forEach((img) => {
      img.onload = () => {
        loaded++
        if (loaded === imgs.length) onAllLoad()
      }
    })
  }

  const reset = () => setShots([])

  return (
    <div className="w-full max-w-sm mx-auto space-y-6">
      {/* Instagram-style Camera Preview */}
      <div className="relative">
        <div className="relative aspect-[9/16] bg-black rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
          <video 
            ref={videoRef} 
            playsInline 
            muted 
            className="w-full h-full object-cover"
            style={{ transform: 'scaleX(-1)' }}
          />
          
          {/* Instagram-style overlay */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top gradient */}
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/60 to-transparent h-24 flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
                <span className="text-white text-sm font-medium">
                  📸 {shots.length}/4 Photos
                </span>
              </div>
            </div>
            
            {/* Rule of thirds grid */}
            <div className="absolute inset-6 border border-white/10 rounded-2xl">
              <div className="w-full h-1/3 border-b border-white/5"></div>
              <div className="w-full h-1/3 border-b border-white/5"></div>
              <div className="absolute left-1/3 top-0 bottom-0 border-l border-white/5"></div>
              <div className="absolute left-2/3 top-0 bottom-0 border-l border-white/5"></div>
            </div>

            {/* Focus indicator */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-16 h-16 border-2 border-white/40 rounded-full animate-pulse"></div>
            </div>
          </div>

          {/* Capture flash effect */}
          <AnimatePresence>
            {isCapturing && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.8, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 bg-white pointer-events-none"
              />
            )}
          </AnimatePresence>
        </div>

        {/* Hidden canvas for processing */}
        <canvas ref={canvasRef} className="hidden" />
      </div>

      {/* Instagram-style Controls */}
      <div className="flex flex-col gap-4">
        {/* Capture button */}
        <div className="flex justify-center">
          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={takePhoto}
            disabled={shots.length >= 4 || !cameraReady || isCapturing}
            className={`relative w-20 h-20 rounded-full border-4 border-white bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center text-2xl shadow-2xl transition-all duration-300 ${
              shots.length >= 4 || !cameraReady ? 'opacity-50 cursor-not-allowed' : 'hover:scale-110 active:scale-95'
            }`}
          >
            <div className="absolute inset-2 rounded-full bg-white/20 backdrop-blur-sm"></div>
            <span className="relative z-10 text-white">
              {isCapturing ? '⏳' : '📸'}
            </span>
          </motion.button>
        </div>

        {/* Action buttons */}
        <div className="flex gap-3 justify-center">
          <Button 
            variant="outline" 
            onClick={createInstagramCollage} 
            disabled={shots.length === 0}
            className="bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 hover:from-pink-600 hover:to-purple-700 shadow-lg"
          >
            ✨ Create Collage ({shots.length})
          </Button>
          <Button 
            variant="ghost" 
            onClick={reset}
            className="text-gray-600 hover:bg-gray-100"
          >
            🔄 Reset
          </Button>
        </div>
      </div>

      {/* Instagram-style Photo Gallery */}
      {shots.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 gap-2"
        >
          {shots.map((shot, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
              className="relative aspect-[9/16] rounded-2xl overflow-hidden shadow-xl border-2 border-white/50"
            >
              <img
                src={shot}
                alt={`Photo ${i + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              <div className="absolute bottom-2 right-2 bg-white/90 text-gray-800 text-xs px-2 py-1 rounded-full font-medium">
                {i + 1}
              </div>
              <div className="absolute top-2 left-2 text-white text-lg">
                ✨
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {shots.length === 4 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-6 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl border border-pink-300/30 backdrop-blur-sm"
        >
          <div className="text-4xl mb-2">🎉</div>
          <p className="text-lg font-bold text-pink-700 mb-2">Perfect! All 4 photos captured!</p>
          <p className="text-sm text-pink-600">Ready to create your Instagram-style collage! 💕</p>
        </motion.div>
      )}
    </div>
  )
}
