import { useState } from "react"
import {AppLayout} from "./AppLayout/AppLayout"

const WIN_PATTERNS = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
  [0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
];

const OPEN_FIELD = [
  '', '', '',
  '', '', '',
  '', '', '',
]

const App = () => {
  const [currentPlayer, setCurrentPlayer] = useState('X')
  const [isGameEnded, setIsGameEnded] = useState(false)
  const [isDraw, setIsDraw] = useState(false)
  const [field, setField] = useState(OPEN_FIELD)

  const changeField = (index) => {
    const newField = [...field]
    newField[index] = currentPlayer
    draw(newField)
    setField(newField)
    const winner = checkWin(newField)
    if (winner) {
      setCurrentPlayer(winner)
      setIsGameEnded(true)
    } else setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X')
  }

  const checkWin = (newField) => {
    for (let pattern of WIN_PATTERNS) {
      const [a, b, c] = pattern
      if (newField[a] && newField[a] === newField[b] && newField[a] === newField[c]) {
        return newField[a]
      }
    }
    return null
  }

  const draw = (newField) => {
    const fieldCopy = newField.every((e) => e !== '')
    // const fieldCopy = newField.filter((e) => e === '')
    if (fieldCopy) {
      setIsDraw(true)
    } else setIsDraw(false)
  }

  const reset = () => {
    setCurrentPlayer('X')
    setIsGameEnded(false)
    setIsDraw(false)
    setField(OPEN_FIELD)
  }


  return (<AppLayout
    currentPlayer={currentPlayer}
    isGameEnded={isGameEnded}
    isDraw={isDraw}
    field={field}
    onChangeField={(index) => changeField(index)}
    reset={() => reset()}
  />)
}

export default App