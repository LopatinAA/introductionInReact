
import { initializeApp } from "firebase/app";
import { 
  getDatabase, 
  ref, 
  set, 
  push, 
  get, 
  remove, 
  update,
  child 
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyALaF285hbXBmdPoJsXImq0TtMzsKEQTXY",
  authDomain: "todolist-b23be.firebaseapp.com",
  projectId: "todolist-b23be",
  storageBucket: "todolist-b23be.firebasestorage.app",
  messagingSenderId: "215460773810",
  appId: "1:215460773810:web:98af791379da78d467eeab",
  measurementId: "G-XQPKMG4XFY",
  databaseURL: 'https://todolist-b23be-default-rtdb.firebaseio.com/'
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export const getTodosRef = () => ref(db, 'todos');

export const getTodoRef = (id) => ref(db, `todos/${id}`);