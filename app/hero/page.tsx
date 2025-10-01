"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function HeroPage() {
  return (
    <main className="min-h-dvh bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900 text-white overflow-hidden relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 z-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: Math.random() * 100 + 10,
              height: Math.random() * 100 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between mx-auto max-w-6xl px-6 py-16 h-dvh">
        <div className="md:w-1/2 space-y-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm font-medium mb-2"
          >
            🎂 Happy Birthday! 🎂
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-balance bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300"
          >
            Arushi Singh
            <span className="block text-white text-2xl md:text-3xl mt-2">An Amazing Person</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-lg text-purple-100/90 leading-relaxed max-w-xl"
          >
            Arushi is a multi-talented individual - a makeup artist, creative thinker, and someone who wins everyone's heart.
            Her smile brightens the day, her laughter makes every challenge seem easier.
            The world feels incomplete without her - she makes every moment special.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Button asChild className="rounded-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white border-0 px-6 py-6 h-auto text-lg font-medium">
              <Link href="/wishes">See Wishes ✨</Link>
            </Button>
            
            <Button asChild className="rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-6 py-6 h-auto text-lg font-medium">
              <Link href="/games">Play Games 🎮</Link>
            </Button>
            
            <Button asChild className="rounded-full bg-white/5 backdrop-blur-sm hover:bg-white/10 text-white border border-white/10 px-6 py-6 h-auto text-lg font-medium">
              <Link href="/mood">Set Mood 🎵</Link>
            </Button>
          </motion.div>
        </div>

        {/* Image section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="md:w-1/2 mt-10 md:mt-0 flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl shadow-purple-500/30">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-400 via-purple-500 to-indigo-600 opacity-90"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="/images/arushi.jpg" 
                alt="Arushi Singh" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent"></div>
          </div>
        </motion.div>
      </div>

      {/* Floating elements */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`float-${i}`}
          className="absolute z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20"
          style={{
            left: `${Math.random() * 80 + 10}%`,
            top: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {["🎂", "✨", "💖", "🎁", "🎉"][i]}
        </motion.div>
      ))}
    </main>
  )
}
