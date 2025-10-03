"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { gsap } from "gsap"

export default function AdvanceWish() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".grand-line",
        { opacity: 0, y: 30, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1, stagger: 0.3, ease: "power2.out" },
      )
      
      // Add floating animation to decorative elements
      gsap.to(".floating-element", {
        y: -20,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.2
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  const [isHovered, setIsHovered] = useState(false);
  
  const handleCardClick = () => {
    window.open("https://advance1-azure.vercel.app/", "_blank");
  };

  return (
    <main className="min-h-dvh bg-gradient-to-br from-amber-100 via-orange-100 to-red-100 grid place-items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-96 h-96 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-20 left-20 text-4xl opacity-20">👑</div>
        <div className="floating-element absolute top-32 right-32 text-3xl opacity-20">✨</div>
        <div className="floating-element absolute bottom-40 left-40 text-3xl opacity-20">🌟</div>
        <div className="floating-element absolute bottom-20 right-20 text-4xl opacity-20">💎</div>
        <div className="floating-element absolute top-1/2 left-10 text-2xl opacity-20">🎭</div>
        <div className="floating-element absolute top-1/3 right-10 text-2xl opacity-20">🎪</div>
      </div>

      <section ref={ref} className="relative max-w-5xl px-6 text-center">
        {/* Special Surprise Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div 
            className={`relative overflow-hidden bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-2xl p-1 cursor-pointer transform transition-all duration-500 ${isHovered ? 'scale-[1.02] shadow-2xl' : 'shadow-xl'}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleCardClick}
          >
            <div className="bg-white rounded-xl p-8 relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-r from-amber-200/30 via-orange-200/30 to-red-200/30 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
              
              <div className="relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <span className="text-white text-3xl">🎁</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-red-600 mb-4">
                    Your Ultimate Birthday Surprise!
                  </h2>
                  
                  <p className="text-gray-700 mb-6 max-w-md">
                    I've created something extraordinary just for you. Click here to discover a magical birthday experience that will make your day unforgettable!
                  </p>
                  
                  <div className={`px-6 py-3 bg-gradient-to-r from-amber-500 to-red-600 text-white rounded-full font-medium shadow-md transition-all duration-300 ${isHovered ? 'shadow-lg scale-105' : ''}`}>
                    Open Your Special Gift &rarr;
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-amber-100 opacity-50"></div>
              <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-orange-100 opacity-50"></div>
              <div className="absolute top-1/2 right-8 w-8 h-8 rounded-full bg-red-100 opacity-50"></div>
              <div className="absolute bottom-1/3 left-12 w-6 h-6 rounded-full bg-amber-100 opacity-50"></div>
            </div>
           </div>
         </motion.div>
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-white/50">
          <div className="space-y-8">
            <p className="grand-line text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
              Arushi, you're not just a person, you're an entire beautiful story waiting to unfold.
            </p>
            
            <p className="grand-line text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
              You illuminate the world around you, bringing light to everyone you meet.
            </p>
            
            <p className="grand-line text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
              Your smile is the greatest treasure of all. From Yash, a promise to always support and cherish you.
            </p>
            
            <motion.div 
              className="grand-line py-8"
              initial={false}
            >
              <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 mb-4">
                Happy Birthday
              </h1>
              <div className="flex items-center justify-center gap-4 text-5xl md:text-6xl">
                <span className="animate-bounce">👑</span>
                <span className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600">
                  Queen Arushi
                </span>
                <span className="animate-bounce animation-delay-500">👑</span>
              </div>
            </motion.div>

            <div className="grand-line flex justify-center items-center gap-6 text-4xl">
              <span className="animate-pulse">🎉</span>
              <span className="animate-pulse animation-delay-300">✨</span>
              <span className="animate-pulse animation-delay-600">🎂</span>
              <span className="animate-pulse animation-delay-900">🎈</span>
              <span className="animate-pulse animation-delay-1200">💖</span>
            </div>
          </div>

          <div className="grand-line mt-12 p-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl text-white">
            <p className="text-lg font-semibold mb-2">
              "May your birthday be the start of a year filled with good luck, good health, and much happiness."
            </p>
            <p className="text-amber-100">
              — With endless love and best wishes for your special day 🌟
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="mt-8"
          >
            <Link href="/wishes" className="text-orange-600 hover:text-orange-800 font-medium text-lg">
              ← Back to All Wishes
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
