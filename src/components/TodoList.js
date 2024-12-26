import React, { useState, useEffect } from 'react';
import TodoListButton from './TodoListButton';

const TodoList = () => {
    const [input, setInput] = useState('');
    const [lists, setLists] = useState(() => {
        const savedLists = localStorage.getItem('todos');
        return savedLists && savedLists.length > 0 ? JSON.parse(savedLists) : [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(lists));
    }, [lists]);

    const addTodo = () => {
        if (input.trim() === '') return;
        setLists([...lists, { id: Date.now(), text: input, deleted: false }]);
        setInput('');
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