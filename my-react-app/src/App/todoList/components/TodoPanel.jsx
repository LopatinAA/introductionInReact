import { useState } from "react"
import style from './TodoPanel.module.css'


export const TodoPanel = ({onAdd, isSubmitting}) => {
    const [inputValue, setInputValue] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        if (inputValue.trim()) {
            onAdd(inputValue.trim())
            setInputValue('')
        }
    }
    return (
        <form className={style.panel} onSubmit={handleSubmit}>
            <input className={style.inputPanel}
                type='text'
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder='Что нужно сделать?'
                disabled={isSubmitting}
            />
            <button className={style.buttonPanel} type='submit' disabled={isSubmitting}>
                {isSubmitting ? 'Добавление...' : 'Добавить'}
            </button>
        </form>
    )
}