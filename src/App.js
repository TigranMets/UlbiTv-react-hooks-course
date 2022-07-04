import axios from 'axios';
import useRequest from './hooks/useRequest';
import './App.css';

function App() {

  const [todos, isLoading, error,] = useRequest(fetchTodos);

  function fetchTodos() {
    return axios.get(`https://jsonplaceholder.typicode.com/todos`)
  };

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>Error</h1>
  }

  return (
    <div className='App'>
      {todos && todos.map(todo => <div key={todo.id} style={{ padding: 30, border: '2px solid black' }}>
        <span>{todo.id}.</span>
        <span> {todo.title}</span>
      </div>)}
    </div>
  );
};

export default App;
