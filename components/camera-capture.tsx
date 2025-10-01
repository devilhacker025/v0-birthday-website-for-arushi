"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

export function CameraCapture() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [shots, setShots] = useState<string[]>([])

  useEffect(() => {
    let stream: MediaStream | null = null
    const start = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "user" } })
        if (videoRef.current) {
          videoRef.current.srcObject = stream
          await videoRef.current.play()
        }
      } catch {
        // ignore
      }
    }
    start()
    return () => {
      stream?.getTracks().forEach((t) => t.stop())
    }
  }, [])

  const takePhoto = () => {
    if (!videoRef.current) return
    const video = videoRef.current
    const canvas = document.createElement("canvas")
    const w = (canvas.width = video.videoWidth || 640)
    const h = (canvas.height = video.videoHeight || 480)
    const ctx = canvas.getContext("2d")
    if (!ctx) return
    ctx.drawImage(video, 0, 0, w, h)
    const url = canvas.toDataURL("image/png")
    setShots((s) => (s.length >= 3 ? s : [...s, url]))
  }

  const downloadAll = () => {
    if (shots.length === 0) return
    // combine into a single collage
    const cols = 3
    const rows = 1
    const imgW = 400
    const imgH = 300
    const canvas = document.createElement("canvas")
    canvas.width = imgW * cols
    canvas.height = imgH * rows
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const imgs = shots.slice(0, 3).map((src) => {
      const img = new Image()
      img.crossOrigin = "anonymous"
      img.src = src
      return img
    })

    const onAllLoad = () => {
      imgs.forEach((img, i) => {
        ctx.drawImage(img, i * imgW, 0, imgW, imgH)
      })
      const url = canvas.toDataURL("image/png")
      const a = document.createElement("a")
      a.href = url
      a.download = "arushi-selfies.png"
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
    <div className="space-y-4">
      <video ref={videoRef} playsInline muted className="w-full rounded-lg border border-border" />
      <div className="flex gap-2">
        <Button onClick={takePhoto} disabled={shots.length >= 3}>
          Take Photo ({shots.length}/3)
        </Button>
        <Button variant="outline" onClick={downloadAll} disabled={shots.length === 0}>
          Download Gift
        </Button>
        <Button variant="ghost" onClick={reset}>
          Reset
        </Button>
      </div>
      {shots.length > 0 && (
        <div className="grid grid-cols-3 gap-2">
          {shots.map((s, i) => (
            <img
              key={i}
              src={s || "/placeholder.svg"}
              alt={`Selfie ${i + 1}`}
              className="w-full aspect-video object-cover rounded-md border border-border"
            />
          ))}
        </div>
      )}
    </div>
  )
}
