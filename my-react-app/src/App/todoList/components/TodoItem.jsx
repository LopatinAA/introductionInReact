export const TodoItem = ({ todo, updateTodo, deleteTodo, isSubmitting, searchQuery }) => {
    
    const highlightText = (text, query) =>{
        if (!query.trim()) return text
    

    const parts = text.split(new RegExp(`(${query})`, 'gi'))
    return parts.map((part, index) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={index} style={{ background: 'yellow' }}>{part}</mark>
      ) : (
        part
      )
    )
  }

    return (
        <li
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '8px 0',
                borderBottom: '1px solid #eee',
            }}>
            <span onClick={() => updateTodo(todo)}
                style={{
                    cursor: 'pointer',
                    flex: 1,
                    textDecoration: todo.completed ? 'line-through' : 'none',
                    color: todo.completed ? '#888' : '#000',
                }}
            >
                {highlightText(todo.title, searchQuery)}
            </span>
            <button
                onClick={() => deleteTodo(todo.id)}
                disabled={isSubmitting}
                style={{ marginLeft: '10px' }}
            >
                🗑️
            </button>
        </li>
    )
}