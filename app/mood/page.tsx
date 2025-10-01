"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { CameraCapture } from "@/components/camera-capture"

type Mood = "good" | "sad" | "angry" | null

const shayari = [
  "Gusse ko hawa do, par dil ko kabhi thandaa na hone do.",
  "Jo narazgi mein bhi muskura de, wahi apna hota hai.",
  "Aao baatein karein, dil halka ho jayega.",
]

const flirty = [
  "Tumhari muskaan se hi to subah hoti hai.",
  "Aaj khud ko mirror me dekha? Itni khoobsurti ka kya plan hai?",
  "Aaj ka din: sirf tum, sirf smiles.",
]

export default function MoodPage() {
  const [mood, setMood] = useState<Mood>(null)
  const [step, setStep] = useState(0)
  const [ok, setOk] = useState(false)

  const lines = useMemo(() => {
    if (mood === "angry") return shayari
    if (mood === "sad") return flirty
    return []
  }, [mood])

  const handleImprove = () => {
    if (step + 1 < lines.length) setStep(step + 1)
    else setOk(true)
  }

  return (
    <main className="min-h-dvh bg-background text-foreground">
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="text-3xl font-semibold">How&apos;s your mood, Arushi?</h1>
        {!mood && (
          <div className="mt-6 flex flex-wrap gap-3">
            <Button onClick={() => setMood("good")} className="bg-primary text-primary-foreground">
              Good Mood
            </Button>
            <Button variant="outline" onClick={() => setMood("sad")}>
              Sad Mood
            </Button>
            <Button variant="secondary" onClick={() => setMood("angry")}>
              Angry Mood
            </Button>
          </div>
        )}

        {mood === "good" && (
          <div className="mt-8 space-y-4">
            <p className="text-muted-foreground">Yay! Direct surprise time — let&apos;s take 3 cute selfies 🎁</p>
            <CameraCapture />
          </div>
        )}

        {(mood === "angry" || mood === "sad") && !ok && (
          <div className="mt-8 space-y-4">
            <p className="leading-relaxed">{lines[step]}</p>
            <div className="flex gap-2">
              <Button onClick={handleImprove}>Next</Button>
              <Button variant="outline" onClick={() => setOk(true)}>
                Mood thik hua? Yes
              </Button>
            </div>
          </div>
        )}

        {(mood === "angry" || mood === "sad") && ok && (
          <div className="mt-8 space-y-4">
            <p className="text-muted-foreground">Nice! Ab gift ka time — 3 selfies please 😊</p>
            <CameraCapture />
          </div>
        )}
      </section>
    </main>
  )
}
