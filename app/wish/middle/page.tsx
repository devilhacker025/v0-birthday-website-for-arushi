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
              
              {/* Animated sparkles */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-3 h-3 bg-pink-400 rounded-full animate-ping opacity-75"></div>
                <div className="absolute top-20 right-20 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-75 animation-delay-700"></div>
                <div className="absolute bottom-10 left-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-ping opacity-75 animation-delay-1000"></div>
                <div className="absolute top-1/3 right-10 w-3 h-3 bg-pink-400 rounded-full animate-ping opacity-75 animation-delay-1500"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center mb-6 shadow-lg transform transition-transform duration-500 hover:rotate-12">
                    <span className="text-white text-4xl animate-pulse">✨</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-purple-600 mb-4">
                    A Magical Surprise Just For You!
                  </h2>
                  
                  <p className="text-gray-700 mb-6 max-w-md">
                    I've created something truly special that will make your heart smile. Click to discover a beautiful surprise that celebrates how amazing you are!
                  </p>
                  
                  <div className={`group px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-medium shadow-md transition-all duration-300 ${isHovered ? 'shadow-lg scale-105' : ''}`}>
                    <span className="flex items-center justify-center gap-2">
                      <span>Reveal Your Magical Surprise</span>
                      <span className="transform transition-transform group-hover:translate-x-1">&rarr;</span>
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-pink-100 opacity-50"></div>
              <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-purple-100 opacity-50"></div>
              <div className="absolute top-1/2 right-8 w-8 h-8 rounded-full bg-indigo-100 opacity-50"></div>
              <div className="absolute bottom-1/3 left-12 w-6 h-6 rounded-full bg-pink-100 opacity-50"></div>
              
              {/* Extra decorative elements */}
              <div className="absolute top-1/4 left-1/3 w-4 h-4 rounded-full bg-purple-100 opacity-30 animate-pulse"></div>
              <div className="absolute bottom-1/4 right-1/3 w-5 h-5 rounded-full bg-indigo-100 opacity-30 animate-pulse animation-delay-700"></div>
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
