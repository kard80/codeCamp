import React, {useState} from 'react'

export default function Redo() {
    const [input, setInput] = useState('')
    const [todo, setTodo] = useState([])
    const [complete, setComplete] = useState([])
    

    const clickAdd = () => {
        setTodo([...todo, {id: todo.length, value: input}]);
        setInput('')
    }

    const clickEdit = idx => {
        const ask = prompt("Insert your input")
        const dummy = [...todo];

        const dummy2 = dummy.splice(idx, 1, {id: idx, value: ask})
        setTodo(dummy)

        console.log(idx)
        console.log(ask)
    }

    const clickMove = (idx)=> {

        setComplete([...complete, {id: complete.length, value: todo[idx].value}])

        const filter = todo.filter((item, index) => index !== idx)
        setTodo(filter)
    }

    const clickMoveBack = id => {
        setTodo([...todo, {id: todo.length, value: complete[id].value}])

        const filter = complete.filter((item, index) => index !== id);
        setComplete(filter)
    }

    const clickDel = idx => {
        const dummy = [...complete];
        const action = dummy.filter((item, id) => id !== idx)

        setComplete(action)
    }

    return (
        <div style = {{display: "flex"}}>
            <div style = {{border: "solid 1px"}}>
                <h1>Todo-list</h1>
                <ul>
                    {todo.map((item, idx) => <li key = {item.id} onClick = {() => clickEdit(idx)} onDoubleClick = {() => clickMove(idx)}>{item.value}</li>)}
                </ul>
                <input value = {input} onChange = {e => setInput(e.target.value)}></input>
                <button onClick = {clickAdd}>Add</button>
            </div>
            <div style = {{border: "1px slid", width: "500px"}}>
                <ul>
                    {complete.map((item, id) => <li onDoubleClick = {() => clickMoveBack(id)} key = {item.id}>{item.value}<button onClick = {() => clickDel(id)} >Del</button></li>)}
                </ul>
            </div>
        </div>
    )
}
