import './App.css';
import useInput from './hooks/useInput';

function App() {
  const userName = useInput('');
  const password = useInput('');

  return (
    <div className='App'>
      <input {...userName} placeholder='user name'/>
      <input {...password}  placeholder='user password'/>
      <button onClick={() => console.log(userName.value, password.value)}>console log value</button>
    </div>
  );
}

export default App;
