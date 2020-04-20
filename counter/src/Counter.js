import React, { useEffect, useState } from 'react'
import './Counter.css'

export default function Counter() {
    const [input, setInputValue] = useState('');
    const [todoList, setTodoList] = useState([]);

    const inputValue = e => {
        setInputValue(e.target.value)
    }

    let add = () => {
        setTodoList([...todoList, { id: todoList.length + 1, input }])
        setInputValue('')
    }

    const del = (index) => {
        console.log(`index is ${index}`);
        let removeAdd = [...todoList]
        removeAdd.splice(index, 1)                                 
        
        let removeFilter = [...todoList];
        removeFilter = removeFilter.filter((item, idx) => idx !== index)
        setTodoList(todoList.filter((item, idx) => idx !== index))
    }

    const edit = index => {
        let ask = prompt('Input your number')
        let editText = [...todoList];
        setTodoList(editText.map((item, idx) => idx === index? item = {id: idx, input: ask}: item))
        console.log(editText)
        
    }

    return (
        <div className="container">
            <div className="firstDiv">
                <h1>To do list</h1>
            </div>
            <div style={{ height: 200 }}>
                <ul>
                    {todoList.map((obj, index) => {
                        const id = obj.id;
                        return(
                            <li key = {id}>
                                {obj.input}
                                <button onClick = {() => del(index)}>
                                    Del
                                </button>
                                <button onClick = {() => edit(index)}>
                                    Edit
                                </button>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <input onChange={inputValue} value={input} />
            <button onClick={add}>Add</button>
        </div>
    )
}
