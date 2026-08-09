// hooks/useTodos.js
import { useState, useEffect, useCallback } from 'react';
import * as api from '../api/todoApi';

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Загрузка списка
  const loadTodos = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await api.getTodos();
      setTodos(data);
    } catch (err) {
      setError('Не удалось загрузить список задач');
      console.error('loadTodos error:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Первоначальная загрузка при монтировании
  useEffect(() => {
    loadTodos();
  }, []); // убрали loadTodos из зависимостей, чтобы не было цикла

  // Добавление задачи
  const addTodo = useCallback(async (newTodo) => {
    setIsSubmitting(true);
    setError(null);
    try {
      await api.addTodo(newTodo);
      await loadTodos(); // обновляем список
    } catch (err) {
      setError('Не удалось создать задачу');
      console.error('addTodo error:', err);
    } finally {
      setIsSubmitting(false);
    }
  }, [loadTodos]);

  // Обновление задачи
  const updateTodo = useCallback(async (id, updatedTodo) => {
    setIsSubmitting(true);
    setError(null);
    try {
      await api.updateTodo(id, updatedTodo);
      await loadTodos();
    } catch (err) {
      setError('Не удалось обновить задачу');
      console.error('updateTodo error:', err);
    } finally {
      setIsSubmitting(false);
    }
  }, [loadTodos]);

  // Удаление задачи
  const deleteTodo = useCallback(async (id) => {
    setIsSubmitting(true);
    setError(null);
    try {
      await api.deleteTodo(id);
      await loadTodos();
    } catch (err) {
      setError('Не удалось удалить задачу');
      console.error('deleteTodo error:', err);
    } finally {
      setIsSubmitting(false);
    }
  }, [loadTodos]);

  // Очистка ошибки
  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {
    todos,
    isLoading,
    error,
    isSubmitting,
    loadTodos,
    addTodo,
    updateTodo,
    deleteTodo,
    clearError,
  };
};