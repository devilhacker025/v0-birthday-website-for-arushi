"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function HeroPage() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-semibold text-balance"
        >
          Ye Arushi Singh bahut khubsurat hai, aur multi-talented bhi.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-muted-foreground mt-4 leading-relaxed"
        >
          Isko makeup pasand hai, har cheez me interest hai, aur sabka dil jeet leti hai. Uske bina duniya adhoori si
          lagti hai. Yeh chhota sa gift Yash ki taraf se — ek kahani, kuch wishes, thoda mazaak, aur bahut saari
          yaadein.
        </motion.p>

        <div className="mt-10 flex items-center gap-3">
          <Button asChild className="bg-primary text-primary-foreground">
            <Link href="/wishes">Go to Wishes</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/games">Play Games</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/mood">Set Mood</Link>
          </Button>
        </div>
      </section>
    </main>
  )
}
