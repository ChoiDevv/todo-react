import React, { useState } from 'react';
import TodoListButton from './TodoListButton';

const TodoList = () => {
    const [lists, setLists] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = () => {

    }

    const deleteTodo = (id) => {

    }

    return (
        <div>
            <h1>투-두 리스트</h1>
            <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='새 할 일을 추가해주세요.'
            />
            <TodoListButton onClick={addTodo} label="add"/>

            <ul>
                {lists.map((list) => (
                    <li key={list.id}>
                        {list.text}
                        <TodoListButton onClick={() => deleteTodo(list.id)} label="delete" />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;