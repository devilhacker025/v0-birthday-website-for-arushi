"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CameraCapture } from "@/components/camera-capture"
import { Card, CardContent } from "@/components/ui/card"
import { generateMoodResponse, generateFlirtMessage } from "@/lib/gemini-api"

type Mood = "good" | "sad" | "angry" | null

import { generateShayari } from "@/lib/gemini-api"

export default function MoodPage() {
  const [mood, setMood] = useState<Mood>(null)
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [ok, setOk] = useState(false)
  const [messageHistory, setMessageHistory] = useState<string[]>([])

  useEffect(() => {
    // Show default message even when no mood is selected
    if (!mood) {
      fetchDefaultMessage();
    } else {
      fetchMoodResponse();
    }
  }, [mood]);

  const fetchDefaultMessage = async () => {
    setLoading(true);
    try {
      // Alternate between shayari and flirty messages
      const isEven = messageHistory.length % 2 === 0;
      const response = isEven 
        ? await generateFlirtMessage() 
        : await generateMoodResponse("happy");
      
      setMessage(response);
      setMessageHistory(prev => [...prev, response]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessage("Tumhari smile se din ban jata hai! Keep smiling! ✨");
    } finally {
      setLoading(false);
    }
  };

  const fetchMoodResponse = async () => {
    setLoading(true);
    try {
      let response;
      if (mood === "angry") {
        // For angry mood, show flirty messages to cheer up
        response = await generateFlirtMessage();
      } else if (mood === "sad") {
        // For sad mood, show shayari to make them happy
        response = await generateShayari();
      } else if (mood === "good") {
        response = await generateMoodResponse("happy");
      }
      
      setMessage(response || "Kya baat hai! Aaj toh mood ekdum mast hai!");
      setMessageHistory(prev => [...prev, response]);
    } catch (error) {
      console.error("Error fetching response:", error);
      setMessage("Tumhari aankhein jaise deep ocean, tumhari smile jaise sunshine - you're amazing!");
    } finally {
      setLoading(false);
    }
  };

  const handleImprove = async () => {
    // If no mood is selected, fetch a new default message
    if (!mood) {
      await fetchDefaultMessage();
    } else {
      await fetchMoodResponse();
      // Never automatically set ok to true - let user click "Feeling Better" button
    }
  }

  return (
    <main className="min-h-dvh bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 text-foreground">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-20 left-20 sm:top-40 sm:left-40 w-40 h-40 sm:w-80 sm:h-80 bg-indigo-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <section className="relative mx-auto max-w-4xl px-4 sm:px-6 py-8 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 mb-4 px-2">
            How&apos;s your mood, Arushi? 💫
          </h1>
          <p className="text-base sm:text-lg text-gray-600 px-2">Let me know how you're feeling today, and I'll make it better!</p>
        </motion.div>

        {!mood && (
          <>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-200 max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <div className="text-6xl mb-6">💖</div>
                  {loading ? (
                    <div className="flex justify-center items-center py-8">
                      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
                    </div>
                  ) : (
                    <p className="text-xl leading-relaxed mb-6 italic text-purple-700">
                      "{message}"
                    </p>
                  )}
                  <div className="flex gap-4 justify-center">
                    <Button
                      onClick={handleImprove}
                      className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2"
                      disabled={loading}
                    >
                      {"One More"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto px-2"
            >
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="cursor-pointer bg-gradient-to-br from-green-100 to-emerald-100 border-green-200 hover:shadow-xl transition-all duration-300" onClick={() => setMood("good")}>
                <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                  <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4">😊</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-green-700 mb-2">Good Mood</h3>
                  <p className="text-sm sm:text-base text-green-600">I'm feeling great today!</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="cursor-pointer bg-gradient-to-br from-blue-100 to-cyan-100 border-blue-200 hover:shadow-xl transition-all duration-300" onClick={() => setMood("sad")}>
                <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                  <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4">😢</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2">Sad Mood</h3>
                  <p className="text-sm sm:text-base text-blue-600">I'm feeling a bit down...</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Card className="cursor-pointer bg-gradient-to-br from-red-100 to-orange-100 border-red-200 hover:shadow-xl transition-all duration-300" onClick={() => setMood("angry")}>
                <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                  <div className="text-4xl sm:text-5xl lg:text-6xl mb-3 sm:mb-4">😠</div>
                  <h3 className="text-lg sm:text-xl font-semibold text-red-700 mb-2">Angry Mood</h3>
                  <p className="text-sm sm:text-base text-red-600">I'm feeling frustrated...</p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
          </>
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
                {loading ? (
                  <div className="flex justify-center items-center py-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
                  </div>
                ) : (
                  <p className={`text-xl leading-relaxed mb-6 italic ${mood === "sad" ? "text-blue-700" : "text-red-700"}`}>
                    "{message}"
                  </p>
                )}
                <div className="flex gap-4 justify-center">
                  <Button
                    onClick={handleImprove}
                    className={`${mood === "sad" ? "bg-blue-500 hover:bg-blue-600" : "bg-red-500 hover:bg-red-600"} text-white px-6 py-2`}
                    disabled={loading}
                  >
                    {"One More"}
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => setOk(true)}
                    className={`${mood === "sad" ? "border-blue-300 text-blue-700 hover:bg-blue-50" : "border-red-300 text-red-700 hover:bg-red-50"} px-6 py-2`}
                    disabled={loading}
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
