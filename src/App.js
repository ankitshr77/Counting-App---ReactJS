import './App.css';
import { useState } from 'react';

function App() {
  const [number, setNumber] = useState(0);
  return (
    <div className='box'>
      <h1><u>SIMPLE REACT COUNTING APP</u></h1>
      <h1 className='digit'>{number}</h1>
      <button className='button' onClick={()=>setNumber(number+1)}>Add</button>
      <button className='button' onClick={()=>setNumber(number-1)}>Subtract</button>
      <button className='button' onClick={()=>setNumber(0)}>Reset</button>
    </div>
  );
}

export default App;
