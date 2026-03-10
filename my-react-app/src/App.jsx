import { useState } from 'react';
import styles from './App.module.css';
import data from './data.json';

const App = () => {
  const [steps, setSteps] = useState(data)
  const [activeIndex, setActiveIndex] = useState(0)

  const onClikcBack = () => {
    setActiveIndex(activeIndex - 1)
  }
  const onClikcForward = () => {
    setActiveIndex(activeIndex + 1)
  }
  const onClikcReset = () => {
    setActiveIndex(0)
  }
  const setStep = (index) => {
    setActiveIndex(index)
  }

  const isStepFirst = 0
  const isStepLast = 6
  
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>Инструкция по готовке пельменей</h1>
        <div className={styles.steps}>
          <div className={styles['steps-content']}>
            {steps.map(((el, index) => {
              if (index == activeIndex) return el.content
            }))}
          </div>
          <ul className={styles['steps-list']}>
            {steps.map((el, index) => {
              return (
                <li key={el.id} className={`
                ${styles['steps-item']} 
                ${activeIndex >= index ? styles.done : ''} 
                ${activeIndex == index ? styles.active : ''}
                `}>
                  <button className={styles['steps-item-button']} onClick={() => setStep(index)}>{index + 1}</button>
                  {el.title}
                </li>
              )
            })}
          </ul>
          <div className={styles['buttons-container']}>
            <button className={styles.button} onClick={onClikcBack} disabled={isStepFirst === activeIndex}>Назад</button>
            {(isStepLast !== activeIndex) 
            ? <button className={styles.button} onClick={onClikcForward}>Далее</button> 
            : <button className={styles.button} onClick={onClikcReset}>Начать сначала</button>}
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default App