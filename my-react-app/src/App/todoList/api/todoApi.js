const BASE_URL = 'http://localhost:3003/todos';

export const getTodos = () => {
    return fetch(BASE_URL)
        .then(res => {
            if (!res.ok) throw new Error('Ошибка загрузки задач')
            return res.json()
        })
}

export const addTodo = (todo) => {
    return fetch(BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo)
    })
        .then(res => {
            if (!res.ok) throw new Error('Ошибка создания задачи');
            //return res.json() нет пока небходимости возращать тело потому что обновлять задачи буду все равно с помощью get
        })
}

export const updateTodo = (id, todo) => {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(todo)
    })
        .then(res => {
            if (!res.ok) throw new Error('Ошибка обновления задачи');
            //return res.json() 
        })
}

export const deletTodo = (id) => {
    return fetch(`${BASE_URL}/${id}`, {
        method: 'DELETE'
    })
        .then(res => {
            if (!res.ok) throw new Error('Ошибка удаления задачи')
        })
}