"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Typewriter } from "@/components/typewriter"
import { useState } from "react"

const lines = [
  "As your friend, I want you to know that I'll always be here to support you through everything.",
  "You are a shining star whose light will never fade, no matter what challenges come your way.",
  "Every moment spent with you becomes a beautiful story that I'll treasure forever.",
  "Happy Birthday Arushi! May your special day be filled with endless joy and love 🌟",
]

export default function MiddleWish() {
  const [isHovered, setIsHovered] = useState(false);
  
  const handleCardClick = () => {
    window.open("https://birthday-peach-rho.vercel.app/", "_blank");
  };

  return (
    <main className="min-h-dvh bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <section className="relative mx-auto max-w-4xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            Heartfelt Emotions & Beautiful Memories 💫
          </h1>
          <p className="text-lg text-gray-700">Words from the heart, crafted with love and care</p>
        </motion.div>

        {/* Special Surprise Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div 
            className={`relative overflow-hidden bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-2xl p-1 cursor-pointer transform transition-all duration-500 ${isHovered ? 'scale-[1.02] shadow-2xl' : 'shadow-xl'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleCardClick}
          >
            <div className="bg-white rounded-xl p-8 relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-r from-pink-200/30 via-purple-200/30 to-indigo-200/30 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
              
              <div className="relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <span className="text-white text-3xl">✨</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600 mb-4">
                    A Special Surprise Awaits You!
                  </h2>
                  
                  <p className="text-gray-700 mb-6 max-w-md">
                    I've prepared something extraordinary just for you. Click this card to discover a beautiful surprise that expresses how special you are!
                  </p>
                  
                  <div className={`px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-medium shadow-md transition-all duration-300 ${isHovered ? 'shadow-lg scale-105' : ''}`}>
                    Reveal Your Surprise &rarr;
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-pink-100 opacity-50"></div>
              <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-purple-100 opacity-50"></div>
              <div className="absolute top-1/2 right-8 w-8 h-8 rounded-full bg-indigo-100 opacity-50"></div>
              <div className="absolute bottom-1/3 left-12 w-6 h-6 rounded-full bg-pink-100 opacity-50"></div>
            </div>
          </div>
        </motion.div>

        <div className="space-y-8">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              className="bg-white/80 backdrop-blur-md rounded-2xl border border-white/50 p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <Typewriter 
                    text={line} 
                    className="text-lg leading-relaxed text-gray-700 font-medium" 
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl p-8 shadow-xl">
            <p className="text-xl font-semibold mb-2">
              "Friendship isn't about being inseparable, it's about being separated and nothing changes." 💕
            </p>
            <p className="text-purple-100">
              — With love and best wishes, Yash
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="text-center mt-8"
        >
          <Link href="/wishes" className="text-purple-600 hover:text-purple-800 font-medium text-lg">
            ← Back to All Wishes
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
