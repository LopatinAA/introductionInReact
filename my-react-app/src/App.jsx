import { useState } from "react"
import style from './App.module.css'

const arrButtonsOfCalculator = [
  1, 2, 3,
  4, 5, 6,
  7, 8, 9,
  0
]



const App = () => {
  const [operand1, setOperand1] = useState('0')
  const [operator, setOperator] = useState('')
  const [operand2, setOperand2] = useState('')

  const [flagResult, setFlagResult] = useState(false)
  let value = operand1 + operator + operand2

  const onClick = (e) => {
    if (operator === '') {
      if (operand1 === '0') {
        setOperand1(`${e}`)
      } else setOperand1(operand1 + `${e}`)

    } else {
      if (operand2 === '0') {
        setOperand2(`${e}`)
      } else setOperand2(operand2 + `${e}`)
    }
  }

  const resetState = () => {
    setOperand1('0')
    setOperator('')
    setOperand2('')
    setFlagResult(false)

  }

  const result = () => {
    if (operator === '+') {
      setOperand1(Number(operand1) + Number(operand2))
    } else setOperand1(Number(operand1) - Number(operand2))
    setOperator('')
    setOperand2('')
    setFlagResult(true)
  }

  return (
    <>
      <div className={style.container}>
        <div className={`
          ${style.input} 
          ${flagResult ? style.result : ''}`}>{value}</div>
        <div className={style.buttons}>
          <div className={style.numsButton}>
            {arrButtonsOfCalculator.map((e) => {
              return <button key={e} onClick={() => onClick(e)}>{e}</button>
            })}
          </div>
          <div className={style.functionButton}>
            <button onClick={resetState}>C</button>
            <button disabled={flagResult} onClick={() => {
              setOperator('+')
            }}>+</button>
            <button disabled={flagResult} onClick={() => {
              setOperator('-')
            }}>-</button>
            <button disabled={flagResult} onClick={result}>=</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App