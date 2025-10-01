"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"

export default function GrandWish() {
  const scope = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!scope.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cinema",
        { opacity: 0, y: 20, scale: 0.96 },
        { opacity: 1, y: 0, scale: 1, duration: 1.0, ease: "power2.out", stagger: 0.1 },
      )
    }, scope)
    return () => ctx.revert()
  }, [])

  const downloadGift = () => {
    const blob = new Blob(["Happy Birthday Arushi! A small token from Yash — You are amazing."], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "birthday-gift.txt"
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <main className="min-h-dvh bg-background text-foreground grid place-items-center px-6">
      <section ref={scope} className="max-w-3xl text-center">
        <h1 className="cinema text-3xl md:text-5xl font-semibold text-balance">Happy Birthday Arushi Singh 🎂💖</h1>
        <p className="cinema text-muted-foreground mt-4">You’re the most amazing person!</p>
        <audio className="cinema mt-6 w-full" controls src="/placeholder.mp3">
          Your browser does not support the audio element.
        </audio>
        <div className="cinema mt-8">
          <Button onClick={downloadGift} className="bg-primary text-primary-foreground">
            Download Gift
          </Button>
        </div>
      </section>
    </main>
  )
}
