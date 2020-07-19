import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';

// components imported
import TodoInput from './TodoInput';
import TodoCard from './TodoCard';

function TodoList() {
    const [todos, setTodos] = useState([]);

    // fetch todos on component did mount
    useEffect(() => {
        axios.get('/todos')
            .then(response => setTodos(response.data))
    }, []);

    const postTodo = (newTodo) => {
        axios.post('/todos', newTodo)
            .then(response => setTodos([...todos, response.data[0]]))
    }

    const deleteTodo = (todoId) => {
        axios.delete(`/todos/${todoId}`)
            .then(() => setTodos(todos.filter(todo => todo.id !== todoId)))
    }

    return (
        <div className="container">
            <TodoInput postTodo={postTodo} />
            <ul>
                {todos.map(todo => (
                    <TodoCard
                        {...todo}
                        deleteTodo={deleteTodo}
                        key={todo.id}
                    />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
