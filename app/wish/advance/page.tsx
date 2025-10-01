"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { gsap } from "gsap"

export default function AdvanceWish() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".grand-line",
        { opacity: 0, y: 20, scale: 0.98 },
        { opacity: 1, y: 0, scale: 1, duration: 0.8, stagger: 0.15, ease: "power2.out" },
      )
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <main className="min-h-dvh bg-background text-foreground grid place-items-center">
      <section ref={ref} className="max-w-3xl px-6 text-center">
        <div className="space-y-4">
          <p className="grand-line text-lg text-muted-foreground">Arushi, tu sirf ek ladki nahi, ek kahani hai.</p>
          <p className="grand-line text-lg text-muted-foreground">Tu apne aas paas sabki duniya roshan karti hai.</p>
          <p className="grand-line text-lg text-muted-foreground">
            Teri muskaan hi sabse badi daulat hai. Yash ke taraf se ek wada hai, hamesha tujhe support karne ka.
          </p>
          <motion.h1 className="grand-line text-3xl md:text-5xl font-semibold text-balance" initial={false}>
            Happy Birthday, Queen 👑
          </motion.h1>
        </div>

        <audio className="mt-8 w-full" controls src="/placeholder.mp3">
          Your browser does not support the audio element.
        </audio>
      </section>
    </main>
  )
}
