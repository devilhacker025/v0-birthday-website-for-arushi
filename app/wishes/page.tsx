"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DynamicShayari } from "@/components/dynamic-shayari"

const cards = [
  { 
    title: "Sweet & Simple", 
    href: "/wish/normal", 
    desc: "Heartfelt wishes from a true friend",
    emoji: "💝",
    gradient: "from-pink-400 to-rose-500",
    bgGradient: "from-pink-50 to-rose-50"
  },
  { 
    title: "Emotional Journey", 
    href: "/wish/middle", 
    desc: "Deep emotions with beautiful memories",
    emoji: "💫",
    gradient: "from-purple-400 to-indigo-500",
    bgGradient: "from-purple-50 to-indigo-50"
  },
  { 
    title: "Grand Celebration", 
    href: "/wish/advance", 
    desc: "Cinematic experience with royal treatment",
    emoji: "👑",
    gradient: "from-amber-400 to-orange-500",
    bgGradient: "from-amber-50 to-orange-50"
  },
]

export default function WishesPage() {
  return (
    <main className="min-h-dvh bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <section className="relative mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-4 px-2">
            Birthday Wishes 🎂
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto mb-6 sm:mb-8 px-2">
            Choose your style — each wish tells a different story, crafted with love just for you ✨
          </p>
          
          <DynamicShayari className="max-w-2xl mx-auto mb-8 sm:mb-12" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {cards.map((card, i) => (
            <motion.div
              key={card.href}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <Link href={card.href} className="block h-full">
                <Card className={`h-full bg-gradient-to-br ${card.bgGradient} border-white/50 hover:shadow-2xl transition-all duration-300 overflow-hidden group`}>
                  <div className={`h-24 sm:h-32 bg-gradient-to-br ${card.gradient} relative overflow-hidden flex items-center justify-center`}>
                    <div className="absolute inset-0 opacity-20">
                      {Array.from({ length: 15 }).map((_, i) => (
                        <div 
                          key={i}
                          className="absolute rounded-full bg-white/40"
                          style={{
                            width: `${Math.random() * 20 + 5}px`,
                            height: `${Math.random() * 20 + 5}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.6 + 0.2
                          }}
                        />
                      ))}
                    </div>
                    <span className="text-3xl sm:text-4xl lg:text-5xl group-hover:scale-110 transition-transform duration-300">
                      {card.emoji}
                    </span>
                  </div>
                  
                  <CardHeader className="pb-2 p-4 sm:p-6">
                    <CardTitle className="text-lg sm:text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                      {card.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0 p-4 sm:p-6">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4">{card.desc}</p>
                    <div className="flex justify-center">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-4 sm:px-6 py-2 bg-gradient-to-r ${card.gradient} text-white rounded-full font-medium shadow-md text-sm sm:text-base`}
                      >
                        Open Wish
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 italic">
            "Every wish is a piece of my heart, wrapped in words just for you" 💕
          </p>
        </motion.div>
      </section>
    </main>
  )
}
