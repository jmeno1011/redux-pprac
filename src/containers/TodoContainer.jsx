import React from 'react'
import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../modules/todo';

const TodoContainer = () => {
    const { input, todos } = useSelector((state) => ({
        input: state.todo.input,
        todos: state.todo.todos
    }));
    console.log(todos);
    const dispatch = useDispatch();
    const onToggle = useCallback(() => dispatch(toggle()), [dispatch])
    // const [onToggle] = useActions
    return (
        <div>
            <h3>todo redux</h3>
            <div style={{ border: '1px solid black', width: '50%', padding: '8px' }}>
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
                ))}
            </div>
        </div>
    )
}

export default TodoContainer;

const TodoItem = ({ todo, onToggle }) => {
    return (
        <div>
            <input
                type={"checkbox"}
                onClick={() => onToggle(todo.id)}
                checked={todo.done}
                readOnly />
            <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>{todo.text}</span>
            <button>삭제</button>
        </div>
    )
}