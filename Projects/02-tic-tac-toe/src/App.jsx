import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinnerFrom } from './logic/board'
import { checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import './App.css'
import { GameBoard } from './components/GameBoard'

export function App() {

  const [board, setBoard] = useState(() => {
    const savedBoard = window.localStorage.getItem('board')
    return savedBoard ? JSON.parse(savedBoard) : Array(9).fill(null)
  }
  )

  const [turn, setTurn] = useState(() => {
    const savedTurn = window.localStorage.getItem('turn')
    return savedTurn ? savedTurn : TURNS.X
  })

  const [winner, setWinner] = useState(null) //false: draw & null : no winner

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)

    window.localStorage.removeItem('board')
    window.localStorage.removeItem('turn')
  }

  const updateBoard = (index) => {

    //Check if the square is already filled
    if (board[index] || winner) return

    //Update the selected square with the current turn
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    //Change the turn
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    //Save the game state
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)

    //Check if there is a winner
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      confetti()
    } else if (checkEndGame(newBoard)) {
      setWinner(false) //draw
    }
  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>

      <GameBoard board={board} updateBoard={updateBoard} />

      <section className='turn'>
        <Square isSelected={turn == TURNS.X} >
          {TURNS.X}
        </Square>
        <Square isSelected={turn == TURNS.O} >
          {TURNS.O}
        </Square>
      </section>

      <button onClick={resetGame}>Reset game</button>

      <WinnerModal winner={winner} resetGame={resetGame} />

    </main>
  )
}