"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const games = [
  { 
    title: "Tic Tac Toe", 
    href: "/games/tic-tac-toe", 
    desc: "Classic 3x3 strategy game — outsmart the AI!",
    emoji: "⭕",
    gradient: "from-blue-400 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    status: "Ready to Play"
  },
  { 
    title: "Ludo", 
    href: "/games/ludo", 
    desc: "Traditional board game with dice and strategy",
    emoji: "🎲",
    gradient: "from-green-400 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
    status: "Coming Soon"
  },
  { 
    title: "Snake & Ladder", 
    href: "/games/snake-and-ladder", 
    desc: "Climb ladders, avoid snakes in this classic game",
    emoji: "🐍",
    gradient: "from-yellow-400 to-orange-500",
    bgGradient: "from-yellow-50 to-orange-50",
    status: "Coming Soon"
  },
]

export default function Games() {
  return (
    <main className="min-h-dvh bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <section className="relative mx-auto max-w-6xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            Mini Games 🎮
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Fun games designed just for you — each one crafted so you can enjoy and win! 🏆
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {games.map((game, i) => (
            <motion.div
              key={game.href}
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
              <Link href={game.href} className="block h-full">
                <Card className={`h-full bg-gradient-to-br ${game.bgGradient} border-white/50 hover:shadow-2xl transition-all duration-300 overflow-hidden group`}>
                  <div className={`h-32 bg-gradient-to-br ${game.gradient} relative overflow-hidden flex items-center justify-center`}>
                    <div className="absolute inset-0 opacity-20">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div 
                          key={i}
                          className="absolute rounded-full bg-white/40"
                          style={{
                            width: `${Math.random() * 15 + 8}px`,
                            height: `${Math.random() * 15 + 8}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            opacity: Math.random() * 0.6 + 0.3
                          }}
                        />
                      ))}
                    </div>
                    <span className="text-5xl group-hover:scale-110 transition-transform duration-300">
                      {game.emoji}
                    </span>
                  </div>
                  
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                        {game.title}
                      </CardTitle>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        game.status === "Ready to Play" 
                          ? "bg-green-100 text-green-700" 
                          : "bg-yellow-100 text-yellow-700"
                      }`}>
                        {game.status}
                      </span>
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-gray-600 leading-relaxed mb-4">{game.desc}</p>
                    <div className="flex justify-center">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-6 py-2 bg-gradient-to-r ${game.gradient} text-white rounded-full font-medium shadow-md`}
                      >
                        {game.status === "Ready to Play" ? "Play Now" : "View Details"}
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
          <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 max-w-2xl mx-auto border border-white/50">
            <p className="text-lg text-gray-700 italic mb-2">
              "Games are more fun when shared with someone special" 🎯
            </p>
            <p className="text-sm text-gray-600">
              Each game is designed with love and a little bit of luck on your side! 😉
            </p>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
