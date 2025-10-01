"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

const MESSAGES = [
  "This website is making only for Arushi Singh",
  "This is made by Yash for the Arushi",
  "Ye sundar ladki ke liye hai ❤️",
]

export default function LoadingScreen() {
  const [index, setIndex] = useState(0)
  const router = useRouter()

  useEffect(() => {
    if (index < MESSAGES.length) {
      const id = setTimeout(() => setIndex((i) => i + 1), 1800)
      return () => clearTimeout(id)
    } else {
      const id = setTimeout(() => router.push("/hero"), 900)
      return () => clearTimeout(id)
    }
  }, [index, router])

  return (
    <main className="min-h-dvh bg-background text-foreground grid place-items-center px-6">
      <div className="w-full max-w-xl text-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.45 }}
            className="text-lg md:text-2xl"
          >
            {MESSAGES[Math.min(index, MESSAGES.length - 1)]}
          </motion.p>
        </AnimatePresence>
        <div className="mt-8 h-2 w-full bg-muted rounded">
          <motion.div
            className="h-2 rounded bg-primary"
            initial={{ width: "0%" }}
            animate={{ width: `${Math.min((index / MESSAGES.length) * 100, 100)}%` }}
            transition={{ duration: 0.45 }}
          />
        </div>
      </div>
    </main>
  )
}
