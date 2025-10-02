"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ConfettiBursts } from "@/components/confetti-bursts"
import Image from "next/image"
import Link from "next/link"

// Love Card Component with animated heart tree
const LoveCard = () => {
  const [showText, setShowText] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [hearts, setHearts] = useState<Array<{id: number, x: number, y: number}>>([])

  const messages = [
    "You are the most wonderful person I've ever met :)",
    "You are the most beautiful!",
    "You are the most charming!",
    "You are the most adorable!",
    "You are the best thing that ever happened to me",
    "\"With you, I need nothing else\"",
    "I will be your dost until the end of my days ❤️",
    "Trust me, 'We will have a wonderful journey for the rest of our lives ❤️'"
  ]

  useEffect(() => {
    // Start the animation sequence
    const timer1 = setTimeout(() => {
      setShowText(true)
    }, 1000)

    // Generate floating hearts
    const heartTimer = setInterval(() => {
      setHearts(prev => [
        ...prev.slice(-10), // Keep only last 10 hearts
        {
          id: Date.now(),
          x: Math.random() * 100,
          y: Math.random() * 100
        }
      ])
    }, 500)

    // Auto-advance text
    const textTimer = setInterval(() => {
      setCurrentTextIndex(prev => (prev + 1) % messages.length)
    }, 2000)

    return () => {
      clearTimeout(timer1)
      clearInterval(heartTimer)
      clearInterval(textTimer)
    }
  }, [])

  return (
    <div className="space-y-6 text-center min-h-[600px] relative overflow-hidden">
      {/* Floating Hearts Background */}
      <div className="absolute inset-0 pointer-events-none">
        {hearts.map((heart) => (
          <motion.div
            key={heart.id}
            initial={{ opacity: 0, scale: 0, x: `${heart.x}%`, y: `${heart.y}%` }}
            animate={{ 
              opacity: [0, 1, 0], 
              scale: [0, 1, 0],
              y: `${heart.y - 20}%`,
              rotate: 360
            }}
            transition={{ duration: 3, ease: "easeOut" }}
            className="absolute text-2xl"
          >
            💖
          </motion.div>
        ))}
      </div>

      {/* Main Heart Animation */}
      <div className="relative">
        <div className="w-full h-64 rounded-xl bg-gradient-to-br from-pink-100 to-red-100 flex items-center justify-center relative overflow-hidden">
          <motion.div
            initial={{ scale: 0, rotate: 0 }}
            animate={{ 
              scale: [0, 1.2, 1], 
              rotate: [0, 10, -10, 0],
            }}
            transition={{ 
              duration: 2, 
              type: "spring",
              repeat: Infinity,
              repeatDelay: 3
            }}
            className="text-8xl relative z-10"
          >
            💖
          </motion.div>
          
          {/* Pulsing rings */}
          {[1, 2, 3].map((ring) => (
            <motion.div
              key={ring}
              className="absolute inset-0 border-4 border-pink-300 rounded-full"
              initial={{ scale: 0, opacity: 1 }}
              animate={{ 
                scale: [0, 2, 3], 
                opacity: [1, 0.5, 0] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity, 
                delay: ring * 0.5,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      </div>
      
      <AnimatePresence>
        {showText && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.h3 
              className="text-3xl font-bold text-pink-600"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Hello my dost,
            </motion.h3>
            
            <div className="p-6 bg-gradient-to-r from-pink-50 to-red-50 rounded-xl shadow-inner">
              <motion.p
                key={currentTextIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className={`text-lg ${messages[currentTextIndex].includes('"') ? 'italic text-pink-700' : 'text-gray-700'}`}
              >
                {messages[currentTextIndex]}
              </motion.p>
              
              <div className="flex justify-center mt-4 space-x-1">
                {messages.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                      index === currentTextIndex ? 'bg-pink-500' : 'bg-pink-200'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="font-semibold text-xl text-pink-600"
            >
              -- Love you always, Yash --
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

// Book Component with page flip animation
const BookCard = () => {
  const [currentPage, setCurrentPage] = useState(0)
  const [isFlipping, setIsFlipping] = useState(false)

  const pages = [
    {
      title: "My best friend 💕",
      content: (
        <div className="text-center space-y-4">
          <motion.div 
            className="relative w-40 h-40 mx-auto overflow-hidden rounded-lg shadow-xl"
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.3 }}
          >
            <Image 
              src="/wish/normal/crush/photo/Screenshot_2024-10-03-17-33-20-226-edit_com.instagram.android.jpg" 
              alt="Arushi" 
              fill 
              className="object-cover"
              onError={(e) => {
                console.log("Failed to load crush image")
                e.currentTarget.src = "/placeholder-user.jpg"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent" />
          </motion.div>
          <h2 className="text-lg font-bold text-purple-600">@yash.sri.025</h2>
        </div>
      )
    },
    {
      title: "Dear friend❤️",
      content: (
        <div className="space-y-3 text-xs leading-relaxed">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            "Every moment spent with you feels like a chapter from my favorite book 🥹,
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            and I can't help but want to write more stories together.🫀
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Would you do me the honor of allowing me 🫶 to be your co-author in this😚 beautiful journey called life🥹💕?"
          </motion.p>
          <motion.p 
            className="text-purple-600 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            mai sach mai phir bhi tumhe chahunga🥹 or hamesha chahunga🫀
          </motion.p>
        </div>
      )
    },
    {
      title: "Shayari for you",
      content: (
        <div className="space-y-3 text-xs leading-relaxed">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Tum dost ho, par kuch zyada,<br/>Har pal mein tumhara saaya,
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Baaton mein teri hai ek jaadu,<br/>Dil se dil ka hai kuch vaada,
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Ye rishta hai kuch khaas, kuch naya,<br/>Dosti ke rangon mein pyaar bhi chhupa.
          </motion.p>
          <motion.p 
            className="text-purple-600 font-semibold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
          >
            i l*** you 😘
          </motion.p>
        </div>
      )
    }
  ]

  const flipPage = () => {
    if (isFlipping) return
    setIsFlipping(true)
    setTimeout(() => {
      setCurrentPage((prev) => (prev + 1) % pages.length)
      setIsFlipping(false)
    }, 600)
  }

  return (
    <div className="space-y-6 text-center min-h-[600px] relative">
      {/* Floating book pages decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-10 bg-purple-200 rounded opacity-20"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${15 + i * 15}%`,
              top: `${10 + (i % 2) * 40}%`,
            }}
          />
        ))}
      </div>

      <motion.h3 
        className="text-3xl font-bold text-purple-600 relative z-10"
        animate={{ 
          scale: [1, 1.02, 1],
          textShadow: [
            "0 0 0px #7c3aed",
            "0 0 8px #7c3aed",
            "0 0 0px #7c3aed"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Friendship Book 📖
      </motion.h3>
      
      <div className="relative w-80 h-96 mx-auto">
        {/* Book shadow */}
        <div className="absolute inset-0 bg-black/20 rounded-xl transform translate-x-2 translate-y-2 blur-sm" />
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl shadow-2xl p-6 cursor-pointer border-2 border-purple-200 relative z-10"
          onClick={flipPage}
          animate={{ 
            rotateY: isFlipping ? [0, 90, 180, 90, 0] : 0,
            scale: isFlipping ? [1, 0.95, 0.9, 0.95, 1] : 1
          }}
          transition={{ duration: isFlipping ? 0.6 : 0.3 }}
          whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Book binding */}
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-purple-300 rounded-l-xl" />
          
          <div className="h-full flex flex-col justify-between">
            <motion.h4 
              key={`title-${currentPage}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-lg font-bold text-purple-700"
            >
              {pages[currentPage].title}
            </motion.h4>
            
            <div className="flex-1 flex items-center justify-center">
              <motion.div
                key={`content-${currentPage}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: isFlipping ? 0.3 : 0 }}
              >
                {pages[currentPage].content}
              </motion.div>
            </div>
            
            <div className="flex justify-between items-center">
              <p className="text-xs text-gray-500">Click to flip page</p>
              <p className="text-xs text-gray-500">({currentPage + 1}/{pages.length})</p>
            </div>
          </div>
          
          {/* Page corner fold effect */}
          <div className="absolute top-4 right-4 w-6 h-6 bg-white/50 transform rotate-45 origin-bottom-left" />
        </motion.div>
      </div>
      
      <motion.p 
        className="text-purple-600 font-semibold relative z-10"
        animate={{ 
          scale: [1, 1.02, 1],
          color: ["#7c3aed", "#8b5cf6", "#7c3aed"]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Yash ki taraf se sirf ek hi dua: tere din hamesha khushiyon se bhare ho. 💜
      </motion.p>
    </div>
  )
}

// Photo Gallery Component with 3D rotation
const GalleryCard = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null)
  const [currentTime, setCurrentTime] = useState(0)

  const images = [
    "/wish/normal/gat/photo/Me/1728604679808.jpg",
    "/wish/normal/gat/photo/Me/1728604679846.jpg", 
    "/wish/normal/gat/photo/Me/1728604679923.jpg",
    "/wish/normal/gat/photo/Me/1728604679961.jpg",
    "/wish/normal/gat/photo/Me/1728604679999.jpg",
    "/wish/normal/gat/photo/Me/1.jpg"
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(Date.now() * 0.001)
    }, 50)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="space-y-6 text-center min-h-[600px] relative">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-blue-200 rounded-full opacity-30"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 20}%`,
            }}
          />
        ))}
      </div>

      <motion.h3 
        className="text-3xl font-bold text-blue-600 relative z-10"
        animate={{ 
          textShadow: [
            "0 0 0px #3b82f6",
            "0 0 10px #3b82f6",
            "0 0 0px #3b82f6"
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        MY LADAKU DOST
      </motion.h3>
      
      <motion.p 
        className="text-xl font-medium text-blue-700 relative z-10"
        animate={{ scale: [1, 1.02, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        CAN'T EXPLAIN THIS FRIENDSHIP
      </motion.p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8 relative z-10">
        {images.map((src, index) => (
          <motion.div 
            key={index}
            className="relative w-full h-32 overflow-hidden rounded-lg shadow-lg cursor-pointer group"
            whileHover={{ 
              scale: 1.1, 
              rotateY: 15,
              rotateX: 5,
              z: 50
            }}
            animate={{
              rotateY: hoveredImage === index ? 0 : Math.sin(currentTime + index) * 8,
              rotateZ: hoveredImage === index ? 0 : Math.cos(currentTime + index * 0.5) * 2,
            }}
            transition={{ duration: 0.3 }}
            onHoverStart={() => setHoveredImage(index)}
            onHoverEnd={() => setHoveredImage(null)}
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image 
              src={src}
              alt={`Memory ${index + 1}`} 
              fill 
              className="object-cover transition-all duration-300 group-hover:brightness-110"
              onError={(e) => {
                console.log(`Failed to load image: ${src}`)
                // Fallback to placeholder
                e.currentTarget.src = "/placeholder.jpg"
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute inset-0 border-2 border-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            
            {/* Sparkle effect on hover */}
            {hoveredImage === index && (
              <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white rounded-full"
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${10 + i * 20}%`,
                    }}
                  />
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
      
      <motion.p 
        className="font-semibold text-xl text-blue-600 mt-8 relative z-10"
        animate={{ 
          scale: [1, 1.05, 1],
          color: ["#2563eb", "#3b82f6", "#2563eb"]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Tu hamesha rocking rahe, aur hamesha muskurati rahe. 🌟
      </motion.p>
    </div>
  )
}

// Main card data
const cards = [
  {
    id: "love",
    title: "Love Card",
    emoji: "💖",
    description: "Words from the heart",
    bgColor: "from-pink-400 to-red-500",
    component: LoveCard,
  },
  {
    id: "crush", 
    title: "Friendship Book",
    emoji: "📖",
    description: "Our friendship story",
    bgColor: "from-purple-400 to-blue-500",
    component: BookCard,
  },
  {
    id: "gat",
    title: "Photo Gallery", 
    emoji: "📸",
    description: "Treasure of memories",
    bgColor: "from-blue-400 to-teal-500",
    component: GalleryCard,
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

  const selectedCardData = cards.find(card => card.id === selectedCard)

  return (
    <main className="min-h-dvh bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 text-foreground py-6 md:py-12 px-4 md:px-6 overflow-hidden">
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
              className="text-center mb-8 md:mb-12"
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 drop-shadow-sm">
                Arushi, tu meri life ka ek important part hai
              </h1>
              
              <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto px-4">
                Aaj ke din tujhe sirf khushiyan milni chahiye. Happy Birthday from the bottom of my heart 🎂❤️
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {cards.map((card, index) => (
                <motion.div
                  key={card.id}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -4,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  onClick={() => handleCardClick(card.id)}
                  className="bg-white/80 backdrop-blur-md rounded-xl overflow-hidden cursor-pointer border border-white/50 hover:border-white transition-all duration-300 shadow-lg"
                >
                  <div className={`h-40 md:h-48 bg-gradient-to-br ${card.bgColor} flex flex-col items-center justify-center p-4 md:p-6 relative overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20">
                      {Array.from({ length: 15 }).map((_, i) => (
                        <div 
                          key={i}
                          className="absolute rounded-full bg-white/30"
                          style={{
                            width: `${Math.random() * 20 + 8}px`,
                            height: `${Math.random() * 20 + 8}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.5 + 0.2
                          }}
                        />
                      ))}
                    </div>
                    <span className="text-4xl md:text-5xl mb-2">{card.emoji}</span>
                    <h3 className="text-xl md:text-2xl font-bold text-white drop-shadow-md text-center">{card.title}</h3>
                  </div>
                  <div className="p-4 md:p-6">
                    <p className="text-gray-600 text-center font-medium text-sm md:text-base">{card.description}</p>
                    <div className="mt-4 flex justify-center">
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium text-sm md:text-base"
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
            className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-4 md:p-10 max-w-4xl mx-auto border border-white/50"
          >
            <motion.button
              whileHover={{ scale: 1.05, x: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBack}
              className="mb-6 md:mb-8 px-4 md:px-5 py-2 md:py-2.5 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-medium flex items-center gap-2 shadow-md text-sm md:text-base"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              Back to Cards
            </motion.button>
            
            {selectedCardData && <selectedCardData.component />}
            
            <div className="mt-6 md:mt-8 flex justify-center">
              <Link href="/wishes" className="text-purple-600 hover:text-purple-800 font-medium text-sm md:text-base">
                ← Back to All Wishes
              </Link>
            </div>
          </motion.div>
        )}
      </motion.div>
    </main>
  )
}
