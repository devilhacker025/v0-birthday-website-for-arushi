"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const cards = [
  { title: "Normal Wish", href: "/wish/normal", desc: "Simple dost-style wish" },
  { title: "Middle Wish", href: "/wish/middle", desc: "Thoda emotion + memories" },
  { title: "Advance Wish", href: "/wish/advance", desc: "Cinematic, bada dhamaka" },
]

export default function WishesPage() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <motion.h1
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-semibold text-balance"
        >
          Birthday Wishes
        </motion.h1>
        <p className="text-muted-foreground mt-2">Choose your style — har ek wish ek kahani ki tarah.</p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {cards.map((c, i) => (
            <motion.div
              key={c.href}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Link href={c.href} className="block">
                <Card className="h-full hover:shadow-sm transition-shadow">
                  <CardHeader>
                    <CardTitle>{c.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-muted-foreground">{c.desc}</CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  )
}
