"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main className="min-h-dvh bg-gradient-to-br from-purple-900 via-pink-900 to-rose-900 text-white flex items-center justify-center overflow-hidden relative">
      {/* Magical background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient orbs */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full opacity-30"
            style={{
              width: Math.random() * 400 + 200,
              height: Math.random() * 400 + 200,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                ['#ff69b4', '#da70d6', '#ff1493', '#ba55d3', '#ff6347'][i % 5]
              } 0%, transparent 70%)`,
              filter: "blur(60px)"
            }}
            animate={{
              x: [0, Math.random() * 300 - 150],
              y: [0, Math.random() * 300 - 150],
              scale: [1, 1.3, 1],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 15 + Math.random() * 10,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Floating particles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-white rounded-full opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + Math.random() * 4,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Magical header */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mb-6 shadow-2xl">
              <motion.span
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="text-3xl sm:text-4xl"
              >
                🎁
              </motion.span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-rose-300">
              Click and see the
            </span>
            <br />
            <motion.span
              animate={{ 
                textShadow: [
                  "0 0 20px #ff69b4",
                  "0 0 40px #da70d6", 
                  "0 0 20px #ff69b4"
                ]
              }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300"
            >
              MAGIC ✨
            </motion.span>
          </motion.h1>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-10"
          >
            <p className="text-lg sm:text-xl md:text-2xl text-pink-200 mb-2 font-medium">
              A special birthday surprise crafted with love
            </p>
            <div className="flex items-center justify-center gap-2 text-base sm:text-lg text-purple-200">
              <span>For</span>
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="font-bold text-pink-300"
              >
                Arushi Singh
              </motion.span>
              <span>from</span>
              <motion.span
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
                className="font-bold text-purple-300"
              >
                Yash
              </motion.span>
              <motion.span
                animate={{ rotate: [0, 20, -20, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                💖
              </motion.span>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 200 }}
          >
            <Button asChild className="group relative overflow-hidden">
              <Link href="/loading-screen" className="bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 hover:from-pink-600 hover:via-purple-600 hover:to-rose-600 text-white px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl font-bold rounded-full shadow-2xl border-0 transition-all duration-300 hover:scale-105 hover:shadow-pink-500/25">
                <motion.span
                  className="relative z-10 flex items-center gap-3"
                  whileHover={{ scale: 1.05 }}
                >
                  <span>Open Your Gift</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    🎉
                  </motion.span>
                </motion.span>
                
                {/* Button glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-400 via-purple-400 to-rose-400 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                />
              </Link>
            </Button>
          </motion.div>

          {/* Decorative elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-12 flex justify-center items-center gap-4 sm:gap-8 text-2xl sm:text-3xl"
          >
            {["🎂", "🎈", "🌟", "💫", "🎊"].map((emoji, i) => (
              <motion.span
                key={emoji}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2 + i * 0.2,
                  delay: i * 0.3,
                }}
                className="opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
              >
                {emoji}
              </motion.span>
            ))}
          </motion.div>

          {/* Bottom message */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-8 text-sm sm:text-base text-purple-200/80 italic max-w-2xl mx-auto"
          >
            "Every pixel, every animation, every word has been crafted with love to make your special day even more magical! 💕"
          </motion.p>
        </motion.div>
      </div>

      {/* Corner decorations */}
      <motion.div
        className="absolute top-4 left-4 sm:top-8 sm:left-8 text-3xl sm:text-4xl opacity-60"
        animate={{ 
          rotate: [0, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          rotate: { repeat: Infinity, duration: 20 },
          scale: { repeat: Infinity, duration: 3 }
        }}
      >
        ✨
      </motion.div>
      <motion.div
        className="absolute top-4 right-4 sm:top-8 sm:right-8 text-3xl sm:text-4xl opacity-60"
        animate={{ 
          rotate: [360, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          rotate: { repeat: Infinity, duration: 25 },
          scale: { repeat: Infinity, duration: 4, delay: 1 }
        }}
      >
        🎈
      </motion.div>
      <motion.div
        className="absolute bottom-4 left-4 sm:bottom-8 sm:left-8 text-3xl sm:text-4xl opacity-60"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 4 
        }}
      >
        🌟
      </motion.div>
      <motion.div
        className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 text-3xl sm:text-4xl opacity-60"
        animate={{ 
          scale: [1, 1.3, 1],
          rotate: [0, -10, 10, 0]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 3,
          delay: 0.5
        }}
      >
        💖
      </motion.div>
    </main>
  )
}
