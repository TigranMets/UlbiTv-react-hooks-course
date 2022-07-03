import { useState } from 'react';
import './App.css';
// import List from './components/List';
import useDebounce from './hooks/useDebounce';
// import Hover from './components/Hover';
// import useHover from './hooks/useHover';

function App() {

  const [value, setValue] = useState('');
  const debouncedSearch = useDebounce(search, 2000);
  
  const onChange = (e) => {
    setValue(e.target.value);
    debouncedSearch(e.target.value);
  };

  function search(query) {
    fetch(`https://jsonplaceholder.typicode.com/todos?query=` + query)
      .then(response => response.json())
      .then(json => console.log(json)
      );
  };
  
  return (
    <div className='App'>
      <input value={value} onChange={onChange} />
    </div>
  );
};

export default App;
