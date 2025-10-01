"use client"

import { motion } from "framer-motion"
import { Typewriter } from "@/components/typewriter"

const lines = [
  "Ek dost ke nate, main hamesha tujhe support karna chahta hu.",
  "Tu ek shining star hai jiska chamak kabhi kam nahi hoga.",
  "Tere saath har ek moment ek kahani ban jaata hai.",
  "Happy Birthday Arushi 🌟",
]

export default function MiddleWish() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="text-3xl font-semibold">
          Thoda emotion, thodi yaadein
        </motion.h1>
        <div className="mt-6 space-y-6">
          {lines.map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px -20% 0px" }}
              transition={{ delay: i * 0.1 }}
              className="rounded-lg border border-border p-4"
            >
              <Typewriter text={l} className="leading-relaxed" />
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
