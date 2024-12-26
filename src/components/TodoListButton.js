import React, { useState } from 'react';

const TodoListButton = ({ onClick, label }) => {
    return (
        <button onClick={onClick}>
            {label}
        </button>
    )
}

export default TodoListButton;