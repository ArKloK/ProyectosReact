import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square'
import { TURNS } from './constants'
import { checkWinnerFrom } from './logic/board'
import { checkEndGame } from './logic/board'
import { WinnerModal } from './components/WinnerModal'
import './App.css'

export function App() {

  const [board, setBoard] = useState(Array(9).fill(null))

  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null) //false: draw & null : no winner

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
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
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }

      </section>

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