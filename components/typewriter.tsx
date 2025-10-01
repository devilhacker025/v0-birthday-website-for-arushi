"use client"

import { useEffect, useState } from "react"

export function Typewriter({
  text,
  speed = 35,
  className,
}: {
  text: string
  speed?: number
  className?: string
}) {
  const [out, setOut] = useState("")
  useEffect(() => {
    let i = 0
    setOut("")
    const id = setInterval(() => {
      setOut((prev) => prev + text[i])
      i++
      if (i >= text.length) clearInterval(id)
    }, speed)
    return () => clearInterval(id)
  }, [text, speed])
  return <p className={className}>{out}</p>
}
