// TestHook.jsx
import React, { useState } from 'react';
import { useTodos } from '../hooks/useTodos';

export default function TestHook() {
  const {
    todos,
    isLoading,
    error,
    isSubmitting,
    addTodo,
    updateTodo,
    deleteTodo,
    loadTodos,
  } = useTodos();

  // Состояние для тестового поля ввода
  const [testInput, setTestInput] = useState('');

  // Тестовая функция добавления
  const handleTestAdd = async () => {
    console.log('🔵 Нажата кнопка добавления');
    if (!testInput.trim()) {
      console.warn('⚠️ Поле пустое');
      return;
    }
    try {
      await addTodo({ title: testInput, completed: false });
      console.log('✅ Добавление завершено');
      setTestInput('');
    } catch (err) {
      console.error('❌ Ошибка при добавлении:', err);
    }
  };

  // Тестовая функция удаления
  const handleTestDelete = async (id) => {
    console.log(`🔵 Удаление задачи с id: ${id}`);
    try {
      await deleteTodo(id);
      console.log('✅ Удаление завершено');
    } catch (err) {
      console.error('❌ Ошибка при удалении:', err);
    }
  };

  // Тестовая функция переключения
  const handleTestToggle = async (todo) => {
    console.log(`🔵 Переключение задачи: ${todo.title}`);
    try {
      await updateTodo(todo.id, { ...todo, completed: !todo.completed });
      console.log('✅ Переключение завершено');
    } catch (err) {
      console.error('❌ Ошибка при переключении:', err);
    }
  };

  // Если загрузка идёт — показываем спинер
  if (isLoading) {
    return <div>⏳ Загрузка...</div>;
  }

  return (
    <div style={{ padding: '20px', border: '2px solid red', margin: '20px' }}>
      <h2>🧪 Тестовый компонент для проверки хука</h2>

      {/* Показываем ошибку если есть */}
      {error && (
        <div style={{ background: '#fee', padding: '10px', borderRadius: '4px' }}>
          ❌ Ошибка: {error}
        </div>
      )}

      {/* Список задач */}
      <h3>Список задач ({todos.length})</h3>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ marginBottom: '8px' }}>
            <span
              onClick={() => handleTestToggle(todo)}
              style={{
                cursor: 'pointer',
                textDecoration: todo.completed ? 'line-through' : 'none',
                marginRight: '10px',
              }}
            >
              {todo.title} {todo.completed ? '✅' : '⬜'}
            </span>
            <button
              onClick={() => handleTestDelete(todo.id)}
              disabled={isSubmitting}
            >
              🗑️ Удалить
            </button>
          </li>
        ))}
      </ul>

      {/* Поле добавления */}
      <div style={{ marginTop: '20px' }}>
        <input
          type="text"
          value={testInput}
          onChange={(e) => setTestInput(e.target.value)}
          placeholder="Введите задачу"
          disabled={isSubmitting}
        />
        <button
          onClick={handleTestAdd}
          disabled={isSubmitting}
          style={{ marginLeft: '10px' }}
        >
          {isSubmitting ? 'Добавление...' : '➕ Добавить'}
        </button>
        <button
          onClick={loadTodos}
          disabled={isSubmitting}
          style={{ marginLeft: '10px' }}
        >
          🔄 Обновить список
        </button>
      </div>

      {/* Информация о состоянии */}
      <div style={{ marginTop: '20px', fontSize: '12px', color: '#666' }}>
        <p>isSubmitting: {String(isSubmitting)}</p>
        <p>isLoading: {String(isLoading)}</p>
        <p>todos.length: {todos.length}</p>
      </div>
    </div>
  );
}