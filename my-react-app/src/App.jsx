import { useState } from 'react'
import style from '../src/App.module.css'

const App = () => {
  const [value, setValue] = useState('')
  const [list, setlist] = useState([])
  const [error, setError] = useState('')
  const [isValueVaild, setIsValueVaild] = useState(false)

  const onInputButtonClick = () => {
    let inputValue = prompt()
    if (inputValue.length < 3) {
      setError('error')
      setIsValueVaild(false)
    } else {
      setValue(inputValue)
      setError('')
      setIsValueVaild(true)
    }
  }

  const onAddButtonClick = () => {
    if (isValueVaild) {
      // const updatedList = [...list, { id: Date.now(), value: value }]
      // setlist(updatedList)
      setlist(list => [...list, {id: Date.now(), value: value}])
      setValue('')
      setError('')
      setIsValueVaild(false)
    }
  }


  return (
    <div className={style.app}>
      <h1 className={style['page-heading']}>Ввод значения</h1>
      <p className={style['no-margin-text']}>
        Текущее значение <code>value</code>: "<output className={style['current-value']}>{value}</output>"
      </p>
      {error !== '' ? <div className={style.error}>Введенное значение должно содержать минимум 3 символа</div> : ''}
      {/* <div className={style.error}>Введенное значение должно содержать минимум 3 символа</div> */}
      <div className={style['buttons-container']}>
        <button className={style.button} onClick={onInputButtonClick}>Ввести новое</button>
        <button className={style.button} onClick={onAddButtonClick} disabled={!isValueVaild}>Добавить в список</button>
      </div>
      <div className={style['list-container']}>
        <h2 className={style['list-heading']}>Список:</h2>
        {(list.length == 0) ? <p className={style['no-margin-text']}>Нет добавленных элементов</p> : ''}
        <ul className={style.list}>
          {list.map((el) => {
            return (
              <li className={style['list-item']} key={el.id}>{el.value}</li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default App