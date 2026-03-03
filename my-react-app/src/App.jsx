import { useState } from "react"

const arrButtonsOfCalculator = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 0, '+', '-', '=', 'C'
]



const App = () => {
  const [value, setValue] = useState('')
  const onClick = (props) => {
    let symbol = props.target.textContent
    if(symbol == 'C') {
      setValue('')
    }
    if(symbol == '-' || symbol == '+') {
      
      
    }
    else {
       // console.log(props.target.textContent)
    setValue(value + symbol)
    }
   
    
  }
  return (
    <>
      <div className='container'>
        <div className='inputField'>
        <input value={value}></input>
        </div>
        {arrButtonsOfCalculator.map((e) => {
          return <button key={e} onClick={onClick}>{e}</button>
        })}
      </div>

    </>
  )
}

export default App