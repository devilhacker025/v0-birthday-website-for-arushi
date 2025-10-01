"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

// Lightweight confetti using positioned circles (no extra deps)
export function ConfettiBursts() {
  const container = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = container.current
    if (!el) return
    const timeout = setTimeout(() => {
      // trigger reflows via CSS animation class if needed later
    }, 0)
    return () => clearTimeout(timeout)
  }, [])

  const pieces = Array.from({ length: 24 })
  return (
    <div ref={container} aria-hidden className="pointer-events-none fixed inset-0 overflow-hidden">
      {pieces.map((_, i) => (
        <motion.span
          key={i}
          className="absolute block rounded-full bg-primary"
          initial={{
            opacity: 0.9,
            top: -20,
            left: Math.random() * 100 + "%",
            width: 8,
            height: 8,
          }}
          animate={{
            top: "110%",
            rotate: Math.random() * 360,
            left: `${Math.random() * 100}%`,
            transition: { duration: 2 + Math.random() * 1.5, ease: "easeOut" },
          }}
        />
      ))}
    </div>
  )
}
