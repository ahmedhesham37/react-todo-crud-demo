import { AiFillDelete } from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa'
import React from 'react'

export default function Todo({todo , onDelete , reminder} ) {
    return (
        <div className={`todo ${todo.reminder ? 'reminder' : ''}`} onDoubleClick={() => reminder(todo.id)}>
            <h4> {todo.title} <AiFillDelete style={{color: 'red' , cursor: 'pointer'}} onClick={() => onDelete(todo.id)}/></h4>
            <p> {todo.body} </p>
        </div>
    )
}
