"use client"

import { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CameraCapture } from "@/components/camera-capture"
import { Card, CardContent } from "@/components/ui/card"

type Mood = "good" | "sad" | "angry" | null

const shayari = [
  "Let the anger flow away, but never let your heart grow cold.",
  "The one who smiles even in anger, that's your true friend.",
  "Come, let's talk it out, your heart will feel lighter.",
]

const flirty = [
  "Your smile is what makes my morning bright.",
  "Did you look in the mirror today? What's the plan with all that beauty?",
  "Today's agenda: just you, just smiles, just happiness.",
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
    <main className="min-h-dvh bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 text-foreground">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <section className="relative mx-auto max-w-4xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-4">
            How&apos;s your mood, Arushi? 💫
          </h1>
          <p className="text-lg text-gray-600">Let me know how you're feeling today, and I'll make it better!</p>
        </motion.div>

        {!mood && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="cursor-pointer bg-gradient-to-br from-green-100 to-emerald-100 border-green-200 hover:shadow-xl transition-all duration-300" onClick={() => setMood("good")}>
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4">😊</div>
                  <h3 className="text-xl font-semibold text-green-700 mb-2">Good Mood</h3>
                  <p className="text-green-600">I'm feeling great today!</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="cursor-pointer bg-gradient-to-br from-blue-100 to-cyan-100 border-blue-200 hover:shadow-xl transition-all duration-300" onClick={() => setMood("sad")}>
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4">😢</div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">Sad Mood</h3>
                  <p className="text-blue-600">I'm feeling a bit down...</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="cursor-pointer bg-gradient-to-br from-red-100 to-orange-100 border-red-200 hover:shadow-xl transition-all duration-300" onClick={() => setMood("angry")}>
                <CardContent className="p-8 text-center">
                  <div className="text-6xl mb-4">😠</div>
                  <h3 className="text-xl font-semibold text-red-700 mb-2">Angry Mood</h3>
                  <p className="text-red-600">I'm feeling frustrated...</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}

        {mood === "good" && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="text-6xl mb-6">🎉</div>
                <h2 className="text-2xl font-bold text-green-700 mb-4">Yay! That's amazing!</h2>
                <p className="text-green-600 text-lg mb-6">Since you're in such a great mood, let's capture this happiness with some cute selfies! 📸✨</p>
                <CameraCapture />
              </CardContent>
            </Card>
          </motion.div>
        )}

        {(mood === "angry" || mood === "sad") && !ok && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Card className={`max-w-2xl mx-auto ${mood === "sad" ? "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200" : "bg-gradient-to-br from-red-50 to-orange-50 border-red-200"}`}>
              <CardContent className="p-8">
                <div className="text-6xl mb-6">{mood === "sad" ? "💙" : "🌟"}</div>
                <motion.p
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className={`text-xl leading-relaxed mb-6 italic ${mood === "sad" ? "text-blue-700" : "text-red-700"}`}
                >
                  "{lines[step]}"
                </motion.p>
                <div className="flex gap-4 justify-center">
                  <Button
                    onClick={handleImprove}
                    className={`${mood === "sad" ? "bg-blue-500 hover:bg-blue-600" : "bg-red-500 hover:bg-red-600"} text-white px-6 py-2`}
                  >
                    {step < lines.length - 1 ? "Next Quote" : "One More"}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setOk(true)}
                    className={`${mood === "sad" ? "border-blue-300 text-blue-700 hover:bg-blue-50" : "border-red-300 text-red-700 hover:bg-red-50"} px-6 py-2`}
                  >
                    Feeling Better? 😊
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {(mood === "angry" || mood === "sad") && ok && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="text-6xl mb-6">🎁</div>
                <h2 className="text-2xl font-bold text-green-700 mb-4">Perfect! Now you're glowing! ✨</h2>
                <p className="text-green-600 text-lg mb-6">Time for your special gift — let's capture that beautiful smile with 3 amazing selfies! 📸💕</p>
                <CameraCapture />
              </CardContent>
            </Card>
          </motion.div>
        )}
      </section>
    </main>
  )
}
