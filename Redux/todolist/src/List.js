import React from 'react'

const List = props => (
    <div className="list" onClick={props.clicked}>
        <h1>{props.name}</h1>
        <p>{props.age}</p>
    </div>
)

export default List