import React, { useEffect, useState } from "react";
import AddNewTodo from "./AddNewTodo";

const TodoList = () => {
    const [todos, setTodos] = useState([
        { text: 'Pay bills', id: 1 },
        { text: 'Do homework', id: 2},
        { text: 'Go out', id: 3}
    ]);

    const [count, setCount] = useState(0);

    const addTodo = (text) => {
        // pakai speard element untuk menampung todo kedalam array baru
        setTodos([
            ...todos,
            // text : text bisa ditulis text saja
            {text, id: Math.random()}
        ]);
    };

    // contoh bila ingin menjalankan fungsi ini sekali
    // useEffect(() => {
    //     console.log('use effect', todos);
    // }, []);

    // contoh bila ingin menjalankan fungsi ini sesuai kondisi tertentu
    useEffect(() => {
        console.log('use effect', todos);
    }, [todos]);

    useEffect(() => {
        console.log('use effect', count);
    }, [count]);    

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
            <button onClick={() => setCount(count + 1)}>Score: {count}</button>
        </div>
    )
};

export default TodoList;