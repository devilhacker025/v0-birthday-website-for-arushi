"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { generateWinMessage } from '@/lib/gemini-api'

interface WinMessageProps {
  game?: string
  onClose?: () => void
}

export function WinMessage({ game = 'game', onClose }: WinMessageProps) {
  const [message, setMessage] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)

  const fetchWinMessage = async () => {
    setLoading(true)
    try {
      const response = await generateWinMessage(game)
      setMessage(response)
    } catch (error) {
      console.error('Error fetching win message:', error)
      setMessage('Waah! Kya game kheli hai! Tum toh champion ho! 🏆')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchWinMessage()
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm p-4"
    >
      <Card className="w-full max-w-md bg-white shadow-xl">
        <CardContent className="p-6">
          <div className="text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-purple-700 mb-4">You Won!</h3>
            
            {loading ? (
              <div className="flex justify-center items-center py-4">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-purple-600"></div>
              </div>
            ) : (
              <p className="text-lg text-gray-700 mb-6 italic">"{message}"</p>
            )}
            
            <div className="flex gap-4 justify-center">
              <Button 
                onClick={fetchWinMessage}
                variant="outline"
                className="border-purple-300 text-purple-700 hover:bg-purple-50"
              >
                New Message
              </Button>
              
              <Button 
                onClick={onClose}
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                Continue
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}