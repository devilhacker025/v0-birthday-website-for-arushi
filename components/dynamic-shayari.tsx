"use client"

import { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { generateShayari } from '@/lib/gemini-api'

interface DynamicShayariProps {
  className?: string
}

export function DynamicShayari({ className = '' }: DynamicShayariProps) {
  const [shayari, setShayari] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(true)

  const fetchShayari = async () => {
    setLoading(true)
    try {
      const response = await generateShayari()
      setShayari(response)
    } catch (error) {
      console.error('Error fetching shayari:', error)
      setShayari('Tum itni khubsurat ho, ki shayari bhi sharma gayi! 💕')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchShayari()
  }, [])

  return (
    <div className={`text-center ${className}`}>
      {loading ? (
        <div className="flex justify-center items-center py-8">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
        </div>
      ) : (
        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
          <p className="text-lg md:text-xl italic text-gray-800 mb-4">"{shayari}"</p>
          <Button 
            onClick={fetchShayari}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
          >
            New Shayari
          </Button>
        </div>
      )}
    </div>
  )
}