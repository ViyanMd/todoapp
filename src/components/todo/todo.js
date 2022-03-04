import {React, useState, useEffect} from "react";
import './todo.css';

const ToDo = (props) => {
    const [input, setInput] = useState("");
    const [todos, setTodos] = useState([]);
    const [filtered, setFiltered] = useState([]);


    function handleComplete(id) {
        let list = [...todos];
        let updatedList = list.map(item => {
            if(item.id === id) {
                return {...item, completed: !item.completed}; 
            }
            return item;
        })
        
        setTodos(updatedList);
        setFiltered(updatedList);
    }

    function removeTodo(id) {
        let list = [...todos];
        let newList = list.filter(item => item.id !== id);
        setTodos(newList)
        setFiltered(newList);
    }

    function showAll (e) {
        e.preventDefault();
        let list = [...todos];
        setFiltered(list);
    }

    function showCompleted(e) {
        e.preventDefault();
        let list = [...todos];
        let newList = list.filter(item => item.completed === true);
        setFiltered(newList);
    }

    function showInProcess(e) {
        e.preventDefault();
        let list = [...todos];
        let newList = list.filter(item => item.completed === false)
        setFiltered(newList);
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
        setFiltered(list);
        setInput("");
    }

    return (
        <div className="todo__section">
            <div className="todo__filter">
                    <button style={{color: props.theme, borderColor: props.theme}} className="btn__filter" onClick={(e) => showAll(e)}>All</button>
                    <button style={{color: props.theme, borderColor: props.theme}} className="btn__filter" onClick={(e) => showInProcess(e)}>In Process</button>
                    <button style={{color: props.theme, borderColor: props.theme}} className="btn__filter" onClick={(e) => showCompleted(e)}>Completed</button>  
            </div>
            <form className="todo__form">
                <input type="text" value={input} placeholder="What's your plan for today ?" onChange={handleInput} ></input>
                <button style={{color: props.theme, borderColor: props.theme}} type="button" onClick={addItem} disabled={input.length < 1 ? true : false}>Add</button>
            </form>
            <div className="todo__list">
                <ul>
                    {filtered.map(item => {
                        return (
                        <li className={`todo__item ${item.completed ? "completed" : " "}`} key={item.id} style={{borderColor: props.theme}}>
                            <p>{item.value}</p>
                            <div className="todo__action">
                                <button style={{color: props.theme, borderColor: props.theme}} className="todo__action_completed" onClick={() => handleComplete(item.id)}>Completed</button>
                                <button style={{color: props.theme, borderColor: props.theme}} className="todo__action_remove" onClick={() => removeTodo(item.id)}>Remove</button>
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