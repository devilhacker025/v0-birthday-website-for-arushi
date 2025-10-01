"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ConfettiBursts } from "@/components/confetti-bursts"
import Image from "next/image"
import Link from "next/link"

// Card data integrating content from Love_C, crush, and gat folders
const cards = [
  {
    id: "love",
    title: "Love Card",
    emoji: "💖",
    description: "दिल से निकले शब्द",
    bgColor: "from-pink-400 to-red-500",
    content: (
      <div className="space-y-4 text-center">
        <h3 className="text-2xl font-bold text-pink-600">Hello my dost,</h3>
        <div className="p-6 bg-gradient-to-r from-pink-50 to-red-50 rounded-xl shadow-inner">
          <p className="mb-3">You are the most wonderful person I've ever met :)</p>
          <p className="mb-3">You are the most beautiful!</p>
          <p className="mb-3">You are the most charming!</p>
          <p className="mb-3">You are the most adorable!</p>
          <p className="mb-3">You are the best thing that ever happened to me</p>
          <p className="mb-3 italic">..."With you, I need nothing else"</p>
          <p className="mb-3">I will be your dost until the end of my days ❤️</p>
          <p className="mb-3">Trust me, 'We will have a wonderful journey for the rest of our lives ❤️'</p>
        </div>
        <p className="font-semibold mt-4 text-xl">-- Yash --</p>
      </div>
    ),
  },
  {
    id: "crush",
    title: "Friendship Book",
    emoji: "📖",
    description: "हमारी दोस्ती की किताब",
    bgColor: "from-purple-400 to-blue-500",
    content: (
      <div className="space-y-4 text-center">
        <h3 className="text-2xl font-bold text-purple-600">My best friend 💕</h3>
        <div className="flex justify-center my-6">
          <div className="relative w-64 h-64 overflow-hidden rounded-lg shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <Image 
              src="/wish/normal/crush/photo/Screenshot_2024-10-03-17-33-20-226-edit_com.instagram.android.jpg" 
              alt="Arushi" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
        <div className="p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl shadow-inner">
          <p className="italic mb-3">"Every moment spent with you feels like a chapter from my favorite book,</p>
          <p className="italic mb-3">and I can't help but want to write more stories together.</p>
          <p className="italic mb-3">Would you do me the honor of allowing me to be your co-author in this beautiful journey called life?"</p>
        </div>
        <p className="font-semibold mt-4 text-xl">Yash ki taraf se sirf ek hi dua: tere din hamesha khushiyon se bhare ho.</p>
      </div>
    ),
  },
  {
    id: "gat",
    title: "Photo Gallery",
    emoji: "📸",
    description: "यादों का खजाना",
    bgColor: "from-blue-400 to-teal-500",
    content: (
      <div className="space-y-4 text-center">
        <h3 className="text-2xl font-bold text-blue-600">MY LADAKU DOST</h3>
        <p className="text-lg font-medium">CAN'T EXPLAIN THIS FRIENDSHIP</p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <motion.div 
              key={num}
              whileHover={{ scale: 1.1, rotate: Math.random() * 10 - 5 }}
              className="relative w-full h-32 overflow-hidden rounded-lg shadow-lg"
            >
              <Image 
                src={`/wish/normal/gat/photo/Me/1728604679${800 + num * 38}.jpg`} 
                alt={`Memory ${num}`} 
                fill 
                className="object-cover"
              />
            </motion.div>
          ))}
        </div>
        <p className="font-semibold mt-6 text-xl">Tu hamesha rocking rahe, aur hamesha muskurati rahe.</p>
      </div>
    ),
  },
]

export default function NormalWish() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleCardClick = (id: string) => {
    setSelectedCard(id)
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 3000)
  }

  const handleBack = () => {
    setSelectedCard(null)
  }

  return (
    <main className="min-h-dvh bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 text-foreground py-12 px-6 overflow-hidden">
      {showConfetti && <ConfettiBursts />}
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        {!selectedCard ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 drop-shadow-sm">
                Arushi, tu meri life ka ek important part hai
              </h1>
              
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Aaj ke din tujhe sirf khushiyan milni chahiye. Happy Birthday from the bottom of my heart 🎂❤️
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cards.map((card, index) => (
                <motion.div
                  key={card.id}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -8,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  onClick={() => handleCardClick(card.id)}
                  className="bg-white/80 backdrop-blur-md rounded-xl overflow-hidden cursor-pointer border border-white/50 hover:border-white transition-all duration-300 shadow-lg"
                >
                  <div className={`h-48 bg-gradient-to-br ${card.bgColor} flex flex-col items-center justify-center p-6 relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <div 
                          key={i}
                          className="absolute rounded-full bg-white/30"
                          style={{
                            width: `${Math.random() * 30 + 10}px`,
                            height: `${Math.random() * 30 + 10}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.5 + 0.2
                          }}
                        />
                      ))}
                    </div>
                    <span className="text-5xl mb-2">{card.emoji}</span>
                    <h3 className="text-2xl font-bold text-white drop-shadow-md">{card.title}</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-600 text-center font-medium">{card.description}</p>
                    <div className="mt-4 flex justify-center">
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium"
                      >
                        Click to Open
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.5,
              type: "spring",
              stiffness: 100
            }}
            className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-6 md:p-10 max-w-4xl mx-auto border border-white/50"
          >
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBack}
              className="mb-8 px-5 py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium flex items-center gap-2 shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Cards
            </motion.button>
            
            {cards.find(card => card.id === selectedCard)?.content}
            
            <div className="mt-8 flex justify-center">
              <Link href="/wishes" className="text-purple-600 hover:text-purple-800 font-medium">
                ← Back to All Wishes
              </Link>
            </div>
          </motion.div>
        )}
      </motion.div>
    </main>
  )
}
