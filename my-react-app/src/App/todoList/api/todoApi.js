// api/todosApi.js
import { 
  ref, 
  set, 
  push, 
  get, 
  remove, 
  update,
  child,
  onValue,
  off
} from "firebase/database";
import { db, getTodosRef, getTodoRef } from '../../../firebase';

// 🟢 GET - получить все задачи
export const getTodos = async () => {
  const todosRef = getTodosRef();
  const snapshot = await get(todosRef);
  
  if (snapshot.exists()) {
    const data = snapshot.val();
    // Firebase возвращает объект с ключами, преобразуем в массив
    return Object.keys(data).map(key => ({
      id: key,
      ...data[key]
    }));
  } else {
    return []; // если данных нет
  }
};

// 🟢 POST - создать новую задачу
export const addTodo = async (todo) => {
  const todosRef = getTodosRef();
  const newTodoRef = push(todosRef); // генерирует уникальный ключ
  await set(newTodoRef, {
    title: todo.title,
    completed: todo.completed || false,
    createdAt: Date.now() // добавим временную метку
  });
  return { id: newTodoRef.key, ...todo };
};

// 🟢 PUT - полностью обновить задачу
export const updateTodo = async (id, todo) => {
  const todoRef = getTodoRef(id);
  await update(todoRef, {
    title: todo.title,
    completed: todo.completed
  });
  return { id, ...todo };
};

// 🟢 DELETE - удалить задачу
export const deleteTodo = async (id) => {
  const todoRef = getTodoRef(id);
  await remove(todoRef);
  return { id };
};