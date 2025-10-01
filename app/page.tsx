"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main className="min-h-dvh bg-background text-foreground flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center px-6"
      >
        <h1 className="text-3xl md:text-5xl font-semibold text-balance">Click and see the magic ✨</h1>
        <p className="text-muted-foreground mt-3">A special birthday surprise for Arushi from Yash</p>
        <div className="mt-8">
          <Button asChild className="bg-primary text-primary-foreground">
            <Link href="/loading-screen">Open</Link>
          </Button>
        </div>
      </motion.div>
    </main>
  )
}
