import { useRef } from 'react';
import './App.css';
import Hover from './components/Hover';
import useHover from './hooks/useHover';

function App() {
  let ref = useRef();
  const isBlackHovering = useHover(ref)
  return (
    <div className='App'>
      <Hover />
      <div ref={ref} style={{ width: 300, height: 300, backgroundColor: isBlackHovering ? 'blue' : 'black' }}></div>
    </div>
  );
}

export default App;
