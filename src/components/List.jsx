import React, { useRef, useState } from 'react'
import useScroll from '../hooks/useScroll';

const List = () => {
    let [todos, setTodos] = useState([]);
    let [page, setPage] = useState(1);
    let [limit, setLimit] = useState(20);
    const parentRef = useRef();
    const childRef = useRef();
    const intersected = useScroll(parentRef, childRef, () => fetchTodos(page, limit));

    function fetchTodos(page, limit) {
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
            .then(response => response.json())
            .then(json => {
                setTodos(prev => [...prev, ...json]);
                setPage(prev => prev + 1);
            }
            )
    };

    return (
        <div ref={parentRef} style={{height: '88vh', overflow: 'auto'}}>
            {todos.map(todo => <div key={todo.id} style={{ padding: 30, border: '2px solid black' }}>
                {todo.id}. {todo.title}
            </div>)}
            <div ref={childRef} style={{ height: 30, backgroundColor: 'red' }}></div>
        </div>
    )
}

export default List