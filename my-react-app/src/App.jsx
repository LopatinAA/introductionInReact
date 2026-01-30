import { createElement, useState } from 'react'            // декларативный подход 
import reactLogo from './assets/react.svg'  // потому что мы просто вызываем модуль без его описания
import viteLogo from '/vite.svg'            // то есть просто описываем желаемый результат
import './App.css'

function App() { // императивный подход, мы создаем функцию для которой пошагово описываем инструкцию 
  const [count, setCount] = useState(0)
  const currentDate = new Date() // декларативный 
  const year = currentDate.getFullYear()

  return ( // декларативный 
    createElement('div', {},
      createElement('div', {}, 
        createElement('a', {href: 'https://vite.dev', target: '_blank'}, 
          createElement('img', {src: `${viteLogo}`, className: 'logo', alt: 'Vite logo'})
        ),
        createElement('a', {href: 'https://react.dev', target: '_blank'}, 
          createElement('img', {src: `${reactLogo}`, className: 'logo', alt: 'React logo'})
        ),
      ),
      createElement('h1', {}, 'Vite + React'),
      createElement('div', { className: 'card' },
        createElement('button', {onClick: () => setCount((count) => count + 1)}, `count is ${count}`),
        createElement('p', {} , 'Edit' , 
          createElement('code', {}, ' src/App.jsx '), 
          'and save to test HMR'
        )
      ),
      createElement('p', {className: 'read-the-docs'}, ' Click on the Vite and React logos to learn more'),
      createElement('p', {className: 'read-the-docs'}, `${year}`),
    )
  )
}

export default App