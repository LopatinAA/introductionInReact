import { useState } from 'react'            // декларативный подход 
import reactLogo from './assets/react.svg'  // потому что мы просто вызываем модуль без его описания
import viteLogo from '/vite.svg'            // то есть просто описываем желаемый результат
import './App.css'

function App() { // императивный подход, мы создаем функцию для которой пошагово описываем инструкцию 
  const [count, setCount] = useState(0)
  const currentDate = new Date() // декларативный 
  const year = currentDate.getFullYear()

  return ( // декларативный 
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <p className="read-the-docs">
        {year}
      </p>
      
    </>
  )
}

export default App