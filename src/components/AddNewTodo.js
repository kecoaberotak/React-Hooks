import React, { useState } from "react";

const AddNewTodo = ({addTodo}) => {
    const [todos, setTodos] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(todos);
        setTodos('');
    }

    return(
        // onSubmit untuk mengambil hasil inputan
        <form onSubmit={handleSubmit}>
            <label htmlFor="todo">To do </label>
            {/* onChange untuk melakukan track terhadap inputan user */}
            <input type="text" value={todos} id="todo" onChange={(e) => setTodos(e.target.value)}/>
            <input type="submit" />
        </form>
    )
};

export default AddNewTodo;