"use client"

import { motion } from "framer-motion"
import { ConfettiBursts } from "@/components/confetti-bursts"

export default function NormalWish() {
  return (
    <main className="min-h-dvh bg-background text-foreground grid place-items-center px-6">
      <section className="max-w-2xl text-center">
        <ConfettiBursts />
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold text-balance"
        >
          Arushi, tu meri life ka ek important part hai.
        </motion.h1>
        <p className="text-muted-foreground leading-relaxed mt-4">
          Aaj ke din tujhe sirf khushiyan milni chahiye. Happy Birthday from the bottom of my heart 🎂❤️
        </p>
      </section>
    </main>
  )
}
