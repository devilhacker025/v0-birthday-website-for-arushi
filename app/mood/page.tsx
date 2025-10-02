"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CameraCapture } from "@/components/camera-capture"
import { Card, CardContent } from "@/components/ui/card"
import { generateMoodResponse, generateFlirtMessage } from "@/lib/gemini-api"

type Mood = "good" | "sad" | "angry" | null

// Hardcoded shayari for sad mood
const sadShayari = [
  "Janamdin mubarak ho tumhe, tum duniya ki sabse khoobsurat ladki ho! ❤️",
  "Tere smile se roshan hota hai sara jahaan, Happy Birthday meri jaan! 💫",
  "Tumhari khushi se badi koi khushi nahi, Happy Birthday meri pyaari dost! 🥳",
  "Zindagi ke har mod pe saath nibhane ke liye, thank you! Birthday pe tight wala hug! 🤗",
  "Tum ho toh life hai beautiful, tum na ho toh life hai impossible! Happy Birthday! 💕",
  "Tumhari aankhein jaise deep ocean, tumhari smile jaise sunshine, tumhara dil jaise pure gold - Happy Birthday to the most precious person! 💎",
  "Har pal tumhare saath bitana hai, har khushi tumhare saath manana hai, life mein bas tumhe hi chahna hai - Happy Birthday my everything! 💫",
  "Tum ho woh khushboo jo hawa mein rehti hai, tum ho woh roshni jo andheron mein dikhti hai, tum ho woh khushi jo dil ko sukoon deti hai! 🌹"
]

// Hardcoded flirty messages for angry mood
const flirtyMessages = [
  "Kya tumne kabhi modeling ki hai? Kyunki tum toh model jaisi dikhti ho! 😍",
  "Tumhari smile dekh ke toh dil garden garden ho jata hai! 💓",
  "Kya karoon, tumhe dekh ke control kho deta hoon! 💘",
  "Tum itni cute ho ki dictionary mein tumhari photo honi chahiye cute word ke saamne! 🥰",
  "Tumhari aankhein itni magical hain, main toh kho gaya! ✨",
  "Agar tum night sky ho, toh main shooting star - tumhari ore hi aata hoon! 🌠",
  "Tumhare saath time ruksa jata hai, kyunki har pal special ban jata hai! ⏰",
  "Tumhari aankhon mein dekha toh aise laga jaise time ruk gaya ho, duniya tham gayi ho, aur bas tum hi tum ho! 💫"
]

// Function to get random item from array
function getRandomItem<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

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
        response = getRandomItem(flirtyMessages);
      } else if (mood === "sad") {
        // For sad mood, show shayari to make them happy
        response = getRandomItem(sadShayari);
      } else if (mood === "good") {
        response = await generateMoodResponse("happy");
      }
      
      // Make sure we don't repeat the same message
      if (messageHistory.includes(response)) {
        // Try one more time if we got a duplicate
        if (mood === "angry") {
          response = getRandomItem(flirtyMessages);
        } else if (mood === "sad") {
          response = getRandomItem(sadShayari);
        } else if (mood === "good") {
          response = await generateMoodResponse("happy");
        }
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
