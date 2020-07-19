import React, { useState } from 'react';
import './style.css'

function TodoInput(props) {
    const [inputValue, setInputValue] = useState('')
    return (
        <div className="header">
            <h2>My Todo List</h2>
            <input
                type="text"
                placeholder="What do you have to do?"
                onChange={(event) => { setInputValue(event.target.value) }
                }
                value={inputValue}
            />
            <button
                className="addBtn"
                onClick={() => {
                    props.postTodo({ content: inputValue })
                    setInputValue('')
                }}
            >
                ADD
            </button >
        </div >
    )
}

export default TodoInput;