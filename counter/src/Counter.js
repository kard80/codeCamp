import React, { useEffect, useState } from 'react'
import './Counter.css'

export default function Counter() {
    const [input, setInput] = useState('');
    const [arr, setArr] = useState([]);
    const [input2, setInput2] = useState('');
    const [id2, setId2] = useState('')

    const clickAdd = () => {
        setArr([...arr, {id: arr.length , value: input}]);
        setInput('');
    }

    const clickDel = id => {
        setArr(arr.filter((item, idx) => idx !== id))
    }

    const clickEdit = id => {
        let text = prompt("Insert your input");
        setArr(arr.map((item, idx) => idx === id? item = {idx: id, value: text}: item))
    }

    const editUp = () => {
        const dummy = [...arr]
        dummy.map((item, id) => id == id2? item = {id: id, value: input2}: item)
        setArr(dummy)
        // setInput2('')
        // setId2('')
    }




    return (
        <div className="container">
            <input value = {input} onChange = {e => setInput(e.target.value)}></input>
            <button onClick = {clickAdd}>Add</button>
            <br />
            <input value = {input2} onChange = {e => setInput2(e.target.value)}></input>
            <input value = {id2} onChange = {e => setId2(e.target.value)}></input>
            <button onClick = {editUp}>Edit</button>

            <ul>
                {arr.map((item, id) => 
                <li key = {item.id}>
                    {item.value} {item.id}
                    <button onClick = {() => clickDel(id)}>Del</button>
                    {/* <button onClick = {() => clickEdit(id)}>Edit</button> */}
                </li>)}
            </ul>
        </div>
    )
}
