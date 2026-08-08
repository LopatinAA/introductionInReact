import { TodoItem } from "./TodoItem"


export const TodoList = ({todos, isSubmitting, updateTodo, deleteTodo, searchQuery}) => {
    if (todos.length === 0) {
        return <p>Задач нет</p>
    }
    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    updateTodo={updateTodo}
                    deleteTodo={deleteTodo}
                    isSubmitting={isSubmitting}
                    searchQuery={searchQuery}
                />
            ))}
        </ul>
    )
}