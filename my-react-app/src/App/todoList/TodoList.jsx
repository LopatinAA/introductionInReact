import { useEffect, useState } from "react"
import style from './TodoList.module.css'



export const TodoList = () => {
    const [todos, setTodos] = useState([])
    const [idTodo, setIdTodo] = useState(1)


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/todos/${idTodo}`)
            .then(response => response.json())
            .then(json => {
                todos.length === 0
                ? setTodos(() => [json])
                : setTodos(() => [...todos, json])
            })
    }, [idTodo])

    return (
        <div className={style.todoListContainer}>
            <div className={style.header}>
                <div>Список дел </div>
                <button onClick={() => setIdTodo(idTodo + 1)}>+</button>
            </div>
            {todos.map((todo) => {
                return <div key={'todoId' + todo.id} className={style.todo}>{todo.id}. {todo.title}</div>
            })}

        </div>
    )
}