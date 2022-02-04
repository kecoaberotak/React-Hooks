import React, { useState } from "react";
import AddNewTodo from "./AddNewTodo";

const TodoList = () => {
    const [todos, setTodos] = useState([
        { text: 'Pay bills', id: 1 },
        { text: 'Do homework', id: 2},
        { text: 'Go out', id: 3}
    ]);

    const addTodo = (text) => {
        // pakai speard element untuk menampung todo kedalam array baru
        setTodos([
            ...todos,
            // text : text bisa ditulis text saja
            {text, id: Math.random()}
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
            <AddNewTodo addTodo={addTodo}/>
        </div>
    )
};

export default TodoList;