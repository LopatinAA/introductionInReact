import React, { use, useState } from 'react';
import { useTodos } from '../hooks/useTodos';
import { TodoList } from './TodoList';
import { TodoPanel } from './TodoPanel';
import { TodoSearch } from './TodoSearch';

export const TodoContainer = () => {
  const {
    todos,
    isLoading,
    error,
    isSubmitting,
    addTodo,
    updateTodo,
    deleteTodo,
    clearError,
  } = useTodos();

  const handleAdd = (inputValue) => {
    addTodo({ title: inputValue, completed: false });
  };

  const handleToggle = (todo) => {
    updateTodo(todo.id, { ...todo, completed: !todo.completed });
  };

  const [searchQuery, setSearchQuery] = useState('')
  const [sortOrder, setSortOrder] = useState(null)

  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const sortedTodos = [...filteredTodos].sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.title.localeCompare(b.title)
    } else if (sortOrder === 'desc') {
      return b.title.localeCompare(a.title)
    } else return 0
  })

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  const toggleSort = () => {
    if (sortOrder === null) setSortOrder('asc')
    else if (sortOrder === 'asc') setSortOrder('desc')
    else setSortOrder(null)
  }

  const getSortLabel = () => {
    if (sortOrder === 'asc') return 'A → Z ↑'
    if (sortOrder === 'desc') return 'Z → A ↓'
    return '↕ Сортировать'
  }

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', padding: '0 20px' }}>
      <h3>Todo List</h3>

      {isLoading && <p>Загрузка списка...</p>}

      {error && (
        <div style={{ background: '#fee', padding: '10px', borderRadius: '4px', marginBottom: '10px' }}>
          <strong> Ошибка:</strong> {error}
          <button onClick={clearError} style={{ marginLeft: '10px' }}>✕</button>
        </div>
      )}

      <TodoPanel
        onAdd={handleAdd}
        isSubmitting={isSubmitting}
      />
       <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '16px' }}>
        <div style={{ flex: 1 }}>
          <TodoSearch
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            onClearSearch={handleClearSearch}
          />
        </div>
        <button
          onClick={toggleSort}
          style={{
            padding: '6px 12px',
            borderRadius: '4px',
            cursor: 'pointer',
            whiteSpace: 'nowrap'
          }}
          title="Сортировать по алфавиту"
        >
          {getSortLabel()}
        </button>
      </div>
      <TodoList
        todos={sortedTodos}
        isSubmitting={isSubmitting}
        updateTodo={handleToggle}
        deleteTodo={deleteTodo}
        searchQuery={searchQuery}
      />

      {/* Информация о количестве задач */}
      <p style={{ marginTop: '20px', color: '#666' }}>
        Всего задач: {todos.length}
      </p>
    </div>
  );
}