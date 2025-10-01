"use client"

import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const games = [
  { title: "Tic Tac Toe", href: "/games/tic-tac-toe", desc: "Classic 3x3 — play & win!" },
  { title: "Ludo", href: "/games/ludo", desc: "Stub page with rules placeholder" },
  { title: "Snake & Ladder", href: "/games/snake-and-ladder", desc: "Stub page with rules placeholder" },
]

export default function Games() {
  return (
    <main className="min-h-dvh bg-background text-foreground">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="text-3xl font-semibold">Mini Games</h1>
        <p className="text-muted-foreground mt-2">
          Enjoy some quick games — we tuned them so Arushi always has a chance to win 😉
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
          {games.map((g) => (
            <Link key={g.href} href={g.href} className="block">
              <Card className="hover:shadow-sm transition-shadow h-full">
                <CardHeader>
                  <CardTitle>{g.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">{g.desc}</CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
