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
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-48 h-48 sm:w-96 sm:h-96 bg-amber-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-48 h-48 sm:w-96 sm:h-96 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-20 left-20 sm:top-40 sm:left-40 w-48 h-48 sm:w-96 sm:h-96 bg-red-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-element absolute top-10 left-4 sm:top-20 sm:left-20 text-2xl sm:text-4xl opacity-20">👑</div>
        <div className="floating-element absolute top-16 right-8 sm:top-32 sm:right-32 text-xl sm:text-3xl opacity-20">✨</div>
        <div className="floating-element absolute bottom-20 left-8 sm:bottom-40 sm:left-40 text-xl sm:text-3xl opacity-20">🌟</div>
        <div className="floating-element absolute bottom-10 right-4 sm:bottom-20 sm:right-20 text-2xl sm:text-4xl opacity-20">💎</div>
        <div className="floating-element absolute top-1/2 left-2 sm:left-10 text-lg sm:text-2xl opacity-20">🎭</div>
        <div className="floating-element absolute top-1/3 right-2 sm:right-10 text-lg sm:text-2xl opacity-20">🎪</div>
      </div>

      <section ref={ref} className="relative max-w-5xl px-4 sm:px-6 text-center w-full">
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
            <div className="bg-white rounded-xl p-4 sm:p-6 lg:p-8 relative overflow-hidden">
              <div className={`absolute inset-0 bg-gradient-to-r from-amber-200/30 via-orange-200/30 to-red-200/30 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}></div>
              
              <div className="relative z-10">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-amber-500 to-red-600 rounded-full flex items-center justify-center mb-4 sm:mb-6 shadow-lg">
                    <span className="text-white text-2xl sm:text-3xl">🎁</span>
                  </div>
                  
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 to-red-600 mb-3 sm:mb-4 px-2">
                    Your Ultimate Birthday Surprise!
                  </h2>
                  
                  <p className="text-gray-700 mb-4 sm:mb-6 max-w-md text-sm sm:text-base px-2">
                    I've created something extraordinary just for you. Click here to discover a magical birthday experience that will make your day unforgettable!
                  </p>
                  
                  <div className={`px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-amber-500 to-red-600 text-white rounded-full font-medium shadow-md transition-all duration-300 text-sm sm:text-base ${isHovered ? 'shadow-lg scale-105' : ''}`}>
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
          <div className="bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-white/50">
          <div className="space-y-6 sm:space-y-8">
            <p className="grand-line text-lg sm:text-xl md:text-2xl text-gray-700 font-medium leading-relaxed px-2">
              Arushi, you're not just a person, you're an entire beautiful story waiting to unfold.
            </p>
            
            <p className="grand-line text-lg sm:text-xl md:text-2xl text-gray-700 font-medium leading-relaxed px-2">
              You illuminate the world around you, bringing light to everyone you meet.
            </p>
            
            <p className="grand-line text-lg sm:text-xl md:text-2xl text-gray-700 font-medium leading-relaxed px-2">
              Your smile is the greatest treasure of all. From Yash, a promise to always support and cherish you.
            </p>
            
            <motion.div 
              className="grand-line py-4 sm:py-6 lg:py-8"
              initial={false}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 mb-4 px-2">
                Happy Birthday
              </h1>
              <div className="flex items-center justify-center gap-2 sm:gap-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl px-2">
                <span className="animate-bounce">👑</span>
                <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 text-center">
                  Queen Arushi
                </span>
                <span className="animate-bounce animation-delay-500">👑</span>
              </div>
            </motion.div>

            <div className="grand-line flex justify-center items-center gap-3 sm:gap-4 lg:gap-6 text-2xl sm:text-3xl lg:text-4xl">
              <span className="animate-pulse">🎉</span>
              <span className="animate-pulse animation-delay-300">✨</span>
              <span className="animate-pulse animation-delay-600">🎂</span>
              <span className="animate-pulse animation-delay-900">🎈</span>
              <span className="animate-pulse animation-delay-1200">💖</span>
            </div>
          </div>

          <div className="grand-line mt-8 sm:mt-10 lg:mt-12 p-4 sm:p-6 bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl text-white">
            <p className="text-base sm:text-lg font-semibold mb-2">
              "May your birthday be the start of a year filled with good luck, good health, and much happiness."
            </p>
            <p className="text-amber-100 text-sm sm:text-base">
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
