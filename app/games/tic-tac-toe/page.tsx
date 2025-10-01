"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"

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
  const winner = useMemo(() => checkWinner(board), [board])

  const isGameOver = !!winner

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
    <main className="min-h-dvh bg-background text-foreground grid place-items-center px-6">
      <section className="w-full max-w-md">
        <h1 className="text-2xl font-semibold text-center">Tic Tac Toe</h1>
        <p className="text-center text-muted-foreground mb-6">You are X. Arushi, go win!</p>
        <div className="grid grid-cols-3 gap-2">
          {board.map((cell, i) => (
            <Button key={i} variant="outline" className="h-20 text-2xl bg-transparent" onClick={() => makeMove(i)}>
              {cell}
            </Button>
          ))}
        </div>
        <div className="mt-4 text-center">
          {winner === "draw" && <p>Draw! Try again.</p>}
          {winner === "X" && <p>Arushi (X) wins! 🎉</p>}
          {winner === "O" && <p>O wins! But you can beat it 🙂</p>}
          {!winner && <p>Turn: {turn}</p>}
        </div>
        <div className="mt-4 flex justify-center">
          <Button onClick={reset}>Reset</Button>
        </div>
      </section>
    </main>
  )
}
