import React, { useState } from "react";

const TodoList = () => {
    const [todos, setTodos] = useState([
        { text: 'Pay bills', id: 1 },
        { text: 'Do homework', id: 2},
        { text: 'Go out', id: 3}
    ]);

    const addTodo = () => {
        setTodos([
            ...todos,
            {text: 'Learn Hooks', id: Math.random()}
        ]);
    };

    return (
        <div>
            <ul>
                {todos.map((todo) => {
                    return (
                        <li key={todo.id}>{todo.text}</li>
                    )
                })}
            </ul>
            <button onClick={addTodo}>Add a todo</button>
        </div>
    )
};

export default TodoList;