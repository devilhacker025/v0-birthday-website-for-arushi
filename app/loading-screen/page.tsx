"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"

const MESSAGES = [
  "✨ Creating magic for the most special person...",
  "💖 This beautiful website is crafted exclusively for Arushi Singh",
  "🎂 Made with endless love by Yash for his amazing Arushi",
  "🌟 Ye sundar ladki ke liye hai jo sabse pyaari hai ❤️",
  "🎁 Preparing your birthday surprise...",
  "🎉 Get ready for something absolutely magical...",
  "💫 Almost ready to make you smile...",
]

const FLOATING_EMOJIS = ["🎂", "🎉", "🎁", "💖", "✨", "🌟", "💫", "🎈", "🌹", "👑"]

export default function LoadingScreen() {
  const [index, setIndex] = useState(0)
  const [dots, setDots] = useState("")
  const [showFinalMessage, setShowFinalMessage] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (index < MESSAGES.length) {
      const id = setTimeout(() => setIndex((i) => i + 1), 2200)
      return () => clearTimeout(id)
    } else {
      setShowFinalMessage(true)
      const id = setTimeout(() => router.push("/hero"), 1500)
      return () => clearTimeout(id)
    }
  }, [index, router])

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => (prev.length >= 3 ? "" : prev + "."))
    }, 400)
    return () => clearInterval(interval)
  }, [])

  // Calculate progress percentage
  const progress = Math.min((index / MESSAGES.length) * 100, 100)

  return (
    <main className="min-h-dvh bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 text-white grid place-items-center px-4 sm:px-6 overflow-hidden relative">
      {/* Magical animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 200 + 100,
              height: Math.random() * 200 + 100,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                ['rgba(255,182,193,0.3)', 'rgba(221,160,221,0.3)', 'rgba(255,105,180,0.3)', 'rgba(186,85,211,0.3)'][i % 4]
              } 0%, transparent 70%)`,
              filter: "blur(40px)"
            }}
            animate={{
              x: [0, Math.random() * 200 - 100],
              y: [0, Math.random() * 200 - 100],
              scale: [1, 1.2, 1],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 8 + Math.random() * 12,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Floating emojis */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={`emoji-${i}`}
            className="absolute text-2xl sm:text-3xl opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 4 + Math.random() * 4,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          >
            {FLOATING_EMOJIS[i % FLOATING_EMOJIS.length]}
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="w-full max-w-2xl text-center z-10 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="bg-white/10 backdrop-blur-xl p-6 sm:p-8 lg:p-12 rounded-3xl shadow-2xl border border-white/20"
        >
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <div className="flex justify-center mb-4">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full flex items-center justify-center text-2xl sm:text-3xl"
              >
                🎂
              </motion.div>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-rose-300 mb-2">
              Birthday Magic Loading{dots}
            </h1>
            <p className="text-pink-200 text-sm sm:text-base opacity-90">
              Something extraordinary is being prepared just for you!
            </p>
          </motion.div>

          {/* Messages */}
          <div className="mb-8 min-h-[80px] sm:min-h-[100px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {!showFinalMessage ? (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -20, scale: 0.9 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-center"
                >
                  <p className="text-lg sm:text-xl lg:text-2xl font-medium text-white leading-relaxed px-2">
                    {MESSAGES[Math.min(index, MESSAGES.length - 1)]}
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl mb-4">🎉</div>
                  <p className="text-xl sm:text-2xl lg:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-pink-300">
                    Ready! Let's celebrate! 🥳
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Progress bar */}
          <div className="mb-6">
            <div className="h-2 sm:h-3 w-full bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-pink-400 via-purple-400 to-rose-400 shadow-lg"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
            <div className="flex justify-between mt-2 text-xs sm:text-sm text-pink-200">
              <span>Preparing magic...</span>
              <span className="font-medium">{Math.round(progress)}%</span>
            </div>
          </div>

          {/* Loading animation */}
          <div className="flex justify-center space-x-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-gradient-to-r from-pink-400 to-purple-400"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  delay: i * 0.15,
                  ease: "easeInOut"
                }}
              />
            ))}
          </div>

          {/* Bottom decoration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-8 text-xs sm:text-sm text-pink-200/70 italic"
          >
            "Every moment is being crafted with love for you, Arushi! 💕"
          </motion.div>
        </motion.div>
      </div>

      {/* Corner decorations */}
      <motion.div
        className="absolute top-4 left-4 sm:top-8 sm:left-8 text-2xl sm:text-3xl"
        animate={{ rotate: [0, 10, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      >
        ✨
      </motion.div>
      <motion.div
        className="absolute top-4 right-4 sm:top-8 sm:right-8 text-2xl sm:text-3xl"
        animate={{ rotate: [0, -10, 10, 0] }}
        transition={{ repeat: Infinity, duration: 4, delay: 1 }}
      >
        🎈
      </motion.div>
      <motion.div
        className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 text-2xl sm:text-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 3 }}
      >
        🌟
      </motion.div>
      <motion.div
        className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 text-2xl sm:text-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 3, delay: 1.5 }}
      >
        💖
      </motion.div>
    </main>
  )
}
