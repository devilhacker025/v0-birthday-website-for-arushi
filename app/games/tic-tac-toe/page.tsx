"use client"

import { useMemo, useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { WinMessage } from "@/components/win-message"

type Cell = "X" | "O" | null

function checkWinner(b: Cell[]): Cell | "draw" | null {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (const [a, b2, c] of lines) {
    if (b[a] && b[a] === b[b2] && b[a] === b[c]) return b[a]
  }
  if (b.every(Boolean)) return "draw"
  return null
}

export default function TicTacToe() {
  const [board, setBoard] = useState<Cell[]>(Array(9).fill(null))
  const [turn, setTurn] = useState<"X" | "O">("X")
  const [showWinMessage, setShowWinMessage] = useState(false)
  const winner = useMemo(() => checkWinner(board), [board])

  const isGameOver = !!winner
  
  // Show win message when player (X) wins
  useEffect(() => {
    if (winner === "X") {
      setShowWinMessage(true);
    }
  }, [winner]);

  function makeMove(i: number) {
    if (board[i] || isGameOver) return
    const next = board.slice()
    next[i] = turn
    setBoard(next)
    setTurn(turn === "X" ? "O" : "X")
  }

  // Simple AI to favor Arushi ("X"): if AI is "O" and can win, do; else if X can win next, block sometimes but not always
  function aiMove() {
    if (turn !== "O" || isGameOver) return
    const b = board.slice()

    // winning move for O
    for (let i = 0; i < 9; i++) {
      if (!b[i]) {
        b[i] = "O"
        if (checkWinner(b) === "O") {
          setBoard(b)
          setTurn("X")
          return
        }
        b[i] = null
      }
    }
    // block X randomly (20% chance to miss block to help X)
    const blockable: number[] = []
    for (let i = 0; i < 9; i++) {
      if (!b[i]) {
        b[i] = "X"
        if (checkWinner(b) === "X") blockable.push(i)
        b[i] = null
      }
    }
    if (blockable.length && Math.random() < 0.8) {
      const i = blockable[0]
      b[i] = "O"
      setBoard(b)
      setTurn("X")
      return
    }
    // pick center, corner, side
    const prefs = [4, 0, 2, 6, 8, 1, 3, 5, 7]
    for (const i of prefs) {
      if (!b[i]) {
        b[i] = "O"
        setBoard(b)
        setTurn("X")
        return
      }
    }
  }

  // trigger AI when it's O's turn
  if (turn === "O" && !isGameOver) {
    // allow React to commit then AI moves
    setTimeout(aiMove, 250)
  }

  function reset() {
    setBoard(Array(9).fill(null))
    setTurn("X")
  }

  return (
    <main className="min-h-dvh bg-gradient-to-br from-blue-100 via-cyan-100 to-teal-100 grid place-items-center px-4 sm:px-6">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-cyan-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-20 left-20 sm:top-40 sm:left-40 w-40 h-40 sm:w-80 sm:h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <motion.section 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-sm sm:max-w-md bg-white/80 backdrop-blur-md rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/50 shadow-2xl"
      >
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 mb-2">
            Tic Tac Toe ⭕
          </h1>
          <p className="text-sm sm:text-base text-gray-600">You are <span className="font-bold text-blue-600">X</span>. Let's see if you can beat the AI! 🎯</p>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6 max-w-xs mx-auto">
          {board.map((cell, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: cell ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => makeMove(i)}
              className={`h-16 w-16 sm:h-20 sm:w-20 text-2xl sm:text-3xl font-bold rounded-xl border-2 transition-all duration-200 ${
                cell 
                  ? cell === "X" 
                    ? "bg-blue-100 border-blue-300 text-blue-600" 
                    : "bg-red-100 border-red-300 text-red-600"
                  : "bg-white/50 border-gray-200 hover:bg-white/80 hover:border-gray-300"
              }`}
              disabled={!!cell || isGameOver}
            >
              {cell}
            </motion.button>
          ))}
        </div>

        <div className="text-center mb-6">
          {winner === "draw" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-yellow-100 border border-yellow-300 rounded-xl"
            >
              <p className="text-yellow-700 font-semibold">It's a Draw! 🤝</p>
              <p className="text-yellow-600 text-sm">Great game! Try again?</p>
            </motion.div>
          )}
          {winner === "X" && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="p-4 bg-green-100 border border-green-300 rounded-xl"
            >
              <p className="text-green-700 font-bold text-lg">🎉 Arushi Wins! 🎉</p>
              <p className="text-green-600 text-sm">Amazing strategy! You're a champion! 🏆</p>
            </motion.div>
          )}
          {winner === "O" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 bg-red-100 border border-red-300 rounded-xl"
            >
              <p className="text-red-700 font-semibold">AI Wins This Time! 🤖</p>
              <p className="text-red-600 text-sm">Don't worry, you'll get it next time! 💪</p>
            </motion.div>
          )}
          {!winner && (
            <div className="p-3 bg-gray-100 border border-gray-200 rounded-xl">
              <p className="text-gray-700">
                Current Turn: <span className={`font-bold ${turn === "X" ? "text-blue-600" : "text-red-600"}`}>
                  {turn} {turn === "X" ? "(Your Turn)" : "(AI Thinking...)"}
                </span>
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={reset}
            className="px-4 sm:px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-shadow text-sm sm:text-base"
          >
            New Game 🔄
          </motion.button>
          <Link href="/games">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 sm:px-6 py-2 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-full font-medium shadow-md hover:shadow-lg transition-shadow text-sm sm:text-base w-full sm:w-auto"
            >
              Back to Games
            </motion.button>
          </Link>
        </div>
      </motion.section>
      
      {showWinMessage && (
        <WinMessage 
          game="tic-tac-toe" 
          onClose={() => {
             setShowWinMessage(false);
             setBoard(Array(9).fill(null));
             setTurn("X");
           }} 
        />
      )}
    </main>
  )
}
