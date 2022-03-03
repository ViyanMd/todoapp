import {React, useState} from "react";
import './todo.css';

const ToDo = () => {
    const [input, setInput] = useState(" ");
    const [todos, setTodos] = useState([]);

    function handleComplete(id) {
        let list = [...todos];
        let updatedList = list.map(item => {
            if(item.id === id) {
                return {...item, completed: !item.completed}; 
            }
            return item;
        })
        
        setTodos(updatedList);
    }

    function removeTodo(e) {
        let list = [...todos];
        list.splice(list.indexOf(e.target.value), 1);
        setTodos(list);
    }

    function filterTodos () {

    }

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
                    <button className="btn__filter" onClick={filterTodos}>All</button>
                    <button className="btn__filter">In Process</button>
                    <button className="btn__filter">Completed</button>  
            </div>
            <form className="todo__form">
                <input type="text" value={input} placeholder="What's your plan for today ?" onChange={handleInput}></input>
                <button type="button" onClick={addItem}>Add</button>
            </form>
            <div className="todo__list">
                <ul>
                    {todos.map(item => {
                        return (
                        <li className='todo__item' key={item.id}>
                            <p>{item.value}</p>
                            <div className="todo__action">
                                <button className="todo__action_completed" onClick={() => handleComplete(item.id)}>Completed</button>
                                <button className="todo__action_remove" onClick={removeTodo}>Remove</button>
                            </div>
                        </li> 
                        );
                    })}
                </ul>
            </div>
        </div>
    )
}

export default ToDo;