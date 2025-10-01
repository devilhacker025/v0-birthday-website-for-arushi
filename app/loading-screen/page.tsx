"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

const MESSAGES = [
  "This website is making only for Arushi Singh",
  "This is made by Yash for the Arushi",
  "Ye sundar ladki ke liye hai ❤️",
  "Get ready for something special...",
  "Almost there...",
]

export default function LoadingScreen() {
  const [index, setIndex] = useState(0)
  const [dots, setDots] = useState("")
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

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? "" : prev + "."))
    }, 500)
    return () => clearInterval(interval)
  }, [])

  // Calculate progress percentage
  const progress = Math.min((index / MESSAGES.length) * 100, 100)

  return (
    <main className="min-h-dvh bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white grid place-items-center px-6 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white/10 rounded-full"
            style={{
              width: Math.random() * 300 + 50,
              height: Math.random() * 300 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(50px)"
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 10 + Math.random() * 20,
            }}
          />
        ))}
      </div>

      <div className="w-full max-w-xl text-center z-10 bg-black/20 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-white/10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-pink-200">Loading Your Surprise{dots}</h2>
          
          <AnimatePresence mode="wait">
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.45 }}
              className="text-xl md:text-2xl font-medium mb-8 min-h-[60px] flex items-center justify-center"
            >
              {MESSAGES[Math.min(index, MESSAGES.length - 1)]}
            </motion.p>
          </AnimatePresence>
          
          <div className="mt-8 h-3 w-full bg-gray-700/50 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.45 }}
            />
          </div>
          
          <p className="mt-3 text-right text-sm text-pink-200">{Math.round(progress)}%</p>
          
          <div className="mt-8 flex justify-center">
            {Array.from({ length: 3 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 mx-1 rounded-full bg-pink-400"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  )
}
