import {React, useState} from "react";
import './todo.css';

const ToDo = () => {
    const [input, setInput] = useState(" ");
    const [todos, setTodos] = useState([]);

    function handleInput (e) {
        setInput(e.target.value);
    }

    function addItem(e) {
        e.preventDefault();
        let newItem = {
            id: Math.random() * 1000,
            value: input,
            completed: false
        }

        let list = [...todos];
        list.push(newItem);

        setTodos(list);
        setInput(" ");
    }

    return (
        <div className="todo__section">
            <div className="todo__filter">
                    <button className="btn__filter">All</button>
                    <button className="btn__filter">In Process</button>
                    <button className="btn__filter">Completed</button>  
            </div>
            <form className="todo__form">
                <input type="text" placeholder="What's your plan for today ?" onChange={handleInput} value={input}></input>
                <button type="button" onClick={addItem}>Submit</button>
            </form>
            <div className="todo__list">
                <ul>
                    {todos.map(item => {
                        return <li key={item.id}>{item.value}</li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ToDo;