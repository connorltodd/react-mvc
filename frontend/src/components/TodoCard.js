import React from 'react';
import './style.css';

function TodoCard(props) {
    console.log(props)
    return (
        <li>
            {props.content}
            <span onClick={() => props.deleteTodo(props.id)} className="close">&#10005;</span>
        </li>
    )
}

export default TodoCard;