import React, { useState } from 'react';
import TodoListButton from './TodoListButton';

const TodoList = () => {
    const [lists, setLists] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = () => {
        if (input.trim()) {
            setLists([...lists, { id: Date.now(), text: input, deleted: false }]);
            setInput('');
        }
    }

    const deleteTodo = (id) => {
        setLists(
            lists.map((list) => list.id === id ? { ...list, deleted: true } : list)
        );
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
                {lists.filter((list) => !list.deleted)
                .map((list) => (
                    <li key={list.id}>
                        {list.text}
                    <button onClick={() => deleteTodo(list.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;