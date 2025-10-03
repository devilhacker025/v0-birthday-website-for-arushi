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
        // Request high-resolution camera with 9:16 aspect ratio preference
        stream = await navigator.mediaDevices.getUserMedia({ 
          video: { 
            facingMode: "user",
            width: { ideal: 4320 },
            height: { ideal: 7680 },
            aspectRatio: { ideal: 9/16 }
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

  const apply8KEffect = (ctx: CanvasRenderingContext2D, width: number, height: number) => {
    // Apply 8K-like enhancement effects
    const imageData = ctx.getImageData(0, 0, width, height)
    const data = imageData.data

    // Enhance sharpness and contrast
    for (let i = 0; i < data.length; i += 4) {
      // Increase contrast
      data[i] = Math.min(255, data[i] * 1.2)     // Red
      data[i + 1] = Math.min(255, data[i + 1] * 1.2) // Green
      data[i + 2] = Math.min(255, data[i + 2] * 1.2) // Blue
      
      // Enhance saturation
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3
      data[i] = Math.min(255, data[i] + (data[i] - avg) * 0.3)
      data[i + 1] = Math.min(255, data[i + 1] + (data[i + 1] - avg) * 0.3)
      data[i + 2] = Math.min(255, data[i + 2] + (data[i + 2] - avg) * 0.3)
    }

    ctx.putImageData(imageData, 0, 0)
  }

  const takePhoto = async () => {
    if (!videoRef.current || !canvasRef.current || shots.length >= 4) return
    
    setIsCapturing(true)
    
    // Add capture animation delay
    await new Promise(resolve => setTimeout(resolve, 200))
    
    const video = videoRef.current
    const canvas = canvasRef.current
    
    // Set canvas to 9:16 aspect ratio with high resolution
    const targetWidth = 4320
    const targetHeight = 7680
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

    // Draw the cropped video frame to canvas
    ctx.drawImage(
      video,
      sourceX, sourceY, sourceWidth, sourceHeight,
      0, 0, targetWidth, targetHeight
    )

    // Apply 8K enhancement effects
    apply8KEffect(ctx, targetWidth, targetHeight)

    // Convert to high-quality image
    const url = canvas.toDataURL("image/jpeg", 0.95)
    setShots((s) => [...s, url])
    setIsCapturing(false)
  }

  const downloadAll = () => {
    if (shots.length === 0) return
    
    // Create a beautiful collage in 9:16 format
    const canvas = document.createElement("canvas")
    const collageWidth = 4320
    const collageHeight = 7680
    canvas.width = collageWidth
    canvas.height = collageHeight
    
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Create gradient background
    const gradient = ctx.createLinearGradient(0, 0, 0, collageHeight)
    gradient.addColorStop(0, '#667eea')
    gradient.addColorStop(1, '#764ba2')
    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, collageWidth, collageHeight)

    const imgs = shots.map((src) => {
      const img = new Image()
      img.crossOrigin = "anonymous"
      img.src = src
      return img
    })

    const onAllLoad = () => {
      const photoWidth = collageWidth * 0.8
      const photoHeight = photoWidth * (16/9)
      const spacing = (collageHeight - (photoHeight * shots.length)) / (shots.length + 1)
      const offsetX = (collageWidth - photoWidth) / 2

      // Add title
      ctx.fillStyle = 'white'
      ctx.font = 'bold 120px Arial'
      ctx.textAlign = 'center'
      ctx.fillText('Arushi\'s Special Moments 💕', collageWidth/2, 200)

      imgs.forEach((img, i) => {
        const y = spacing + (i * (photoHeight + spacing/2))
        
        // Add photo frame
        ctx.fillStyle = 'white'
        ctx.fillRect(offsetX - 20, y - 20, photoWidth + 40, photoHeight + 40)
        
        // Add shadow
        ctx.shadowColor = 'rgba(0,0,0,0.3)'
        ctx.shadowBlur = 20
        ctx.shadowOffsetY = 10
        
        ctx.drawImage(img, offsetX, y, photoWidth, photoHeight)
        
        // Reset shadow
        ctx.shadowColor = 'transparent'
        ctx.shadowBlur = 0
        ctx.shadowOffsetY = 0
      })

      const url = canvas.toDataURL("image/jpeg", 0.95)
      const a = document.createElement("a")
      a.href = url
      a.download = `arushi-birthday-memories-${Date.now()}.jpg`
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
    <div className="w-full max-w-md mx-auto space-y-6">
      {/* Camera Preview */}
      <div className="relative">
        <div className="relative aspect-[9/16] bg-black rounded-2xl overflow-hidden shadow-2xl">
          <video 
            ref={videoRef} 
            playsInline 
            muted 
            className="w-full h-full object-cover"
            style={{ transform: 'scaleX(-1)' }} // Mirror effect like front camera
          />
          
          {/* Camera overlay UI */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top overlay */}
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black/50 to-transparent h-20 flex items-center justify-center">
              <span className="text-white text-sm font-medium">
                📸 {shots.length}/4 Photos
              </span>
            </div>
            
            {/* Grid lines for composition */}
            <div className="absolute inset-4 border border-white/20 rounded-lg">
              <div className="w-full h-1/3 border-b border-white/10"></div>
              <div className="w-full h-1/3 border-b border-white/10"></div>
            </div>
          </div>

          {/* Capture flash effect */}
          <AnimatePresence>
            {isCapturing && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 1, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-white pointer-events-none"
              />
            )}
          </AnimatePresence>
        </div>

        {/* Hidden canvas for processing */}
        <canvas ref={canvasRef} className="hidden" />
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-4">
        <div className="flex justify-center">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={takePhoto}
            disabled={shots.length >= 4 || !cameraReady || isCapturing}
            className={`w-20 h-20 rounded-full border-4 border-white bg-white/20 backdrop-blur-sm flex items-center justify-center text-2xl transition-all duration-200 ${
              shots.length >= 4 || !cameraReady ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white/30 active:scale-95'
            }`}
          >
            {isCapturing ? '⏳' : '📸'}
          </motion.button>
        </div>

        <div className="flex gap-2 justify-center">
          <Button 
            variant="outline" 
            onClick={downloadAll} 
            disabled={shots.length === 0}
            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20"
          >
            💾 Download ({shots.length})
          </Button>
          <Button 
            variant="ghost" 
            onClick={reset}
            className="text-white hover:bg-white/10"
          >
            🔄 Reset
          </Button>
        </div>
      </div>

      {/* Photo Gallery */}
      {shots.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 gap-3"
        >
          {shots.map((shot, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="relative aspect-[9/16] rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={shot}
                alt={`Photo ${i + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                {i + 1}
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}

      {shots.length === 4 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center p-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-lg border border-pink-300/30"
        >
          <p className="text-lg font-medium text-pink-700 mb-2">🎉 Perfect! All 4 photos captured!</p>
          <p className="text-sm text-pink-600">Your beautiful memories are ready to download! 💕</p>
        </motion.div>
      )}
    </div>
  )
}
