import { useEffect, useState } from 'react'
import * as api from '../api/todoApi'

export const useTodos = () => {
    const [todos, setTodos] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const loadTodos = () => {
        setIsLoading(true)
        setError(null)
        api.getTodos()
            .then(data => setTodos(data))
            .catch(err => {
                setError('Не удалось загрузить список')
                console.error(err)
            })
            .finally(() => setIsLoading(false))
    }



    useEffect(() => {
        loadTodos()
    }, [])

    const clearError = () => {
        setError(null)
    }

    const addTodo = (newTodo) => {
        setIsSubmitting(true)
        setError(null)
        api.addTodo(newTodo)
            .then(() => loadTodos())
            .catch(err => console.error(err))
            .finally(() => setIsSubmitting(false))
    }

    const updateTodo = (id, updateTodo) => {
        setIsSubmitting(true)
        setError(null)
        api.updateTodo(id, updateTodo)
            .then(() => loadTodos())
            .catch(err => console.error(err))
            .finally(() => setIsSubmitting(false))
    }

    const deleteTodo = (id) => {
        setIsSubmitting(true)
        setError(null)
        api.deletTodo(id)
            .then(() => loadTodos())
            .catch(err => console.error(err))
            .finally(() => setIsSubmitting(false))
    }

    return {
        todos,
        isLoading,
        error,
        isSubmitting,
        loadTodos,
        clearError,
        addTodo,
        updateTodo,
        deleteTodo,
    }
}