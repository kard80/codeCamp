import React, {useState} from 'react'

export default function Redo() {
    const [input, setInput] = useState('')
    const [arr, setArr] = useState([1, 2, 3]);
    const [fix, setFix] = useState('');
    const [fixId, setFixId] = useState()

    const onAdd = () => {
        setArr([...arr, {input, id: arr.length + 1}]);
        setInput('')
    } 

    const onDelete = index => {
        let dummy = [...arr];
        dummy.splice(index, 1);
        setArr(dummy)
    }

    // const onEdit = index => {
    //     let ask = prompt('What your word')
    //     let dummy = [...arr];
    //     setArr(dummy.map((item, idx) => idx === index? item = ask:item))
    // }

    const onFix = (fixId) => {
        setArr(arr.map((item, index) => index === fixId? item = {input:fix, id: index}: item))
    }

    return (
        <div>
            <input value = {input} onChange = {e => setInput(e.target.value)}></input>
            <button onClick = {onAdd}>Add</button>
            <br />
            <input value = {fix} onChange = {e => setFix(e.target.value)}></input>
            <input value = {fixId} onChange = {e => setFixId(e.target.value)}></input>
            <button onClick = {() => onFix(fixId)}>Edit</button>
            <ul>
                {arr.map((item, index) => 
                <li key = {item.id}>
                    {item.inputs}
                    <button onClick = {() => onDelete(index)}>Delete</button>
                    {/* <button onClick = {() => onFix(index)}>Edit</button>
                    <input value = {fix} onChange = {e => setFix(e.target.value)}></input> */}
                </li>)}
            </ul>
        </div>
    )
}
