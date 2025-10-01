"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export default function LudoStub() {
  return (
    <main className="min-h-dvh bg-gradient-to-br from-green-100 via-emerald-100 to-teal-100 grid place-items-center px-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <motion.section 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-2xl text-center bg-white/80 backdrop-blur-md rounded-2xl p-8 border border-white/50 shadow-2xl"
      >
        <div className="text-6xl mb-6">🎲</div>
        <h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-600 mb-4">
          Ludo Game
        </h1>
        <div className="inline-block px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full font-medium mb-6">
          Coming Soon! 🚀
        </div>
        
        <div className="space-y-4 text-gray-700">
          <p className="text-lg leading-relaxed">
            Get ready for an exciting Ludo adventure! We're crafting a special version just for you.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <h3 className="font-semibold text-green-700 mb-3">What's Coming:</h3>
            <ul className="text-left space-y-2 text-green-600">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Colorful board with smooth animations
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Friendly AI opponents
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Special power-ups and surprises
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✓</span>
                Designed so you always have fun winning! 🏆
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-8">
          <Link href="/games">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-shadow"
            >
              Back to Games
            </motion.button>
          </Link>
        </div>
      </motion.section>
    </main>
  )
}
