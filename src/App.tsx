import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [test, setTest] = useState<string>('');

  useEffect(() => {
    fetch('http://localhost:8000/product')
      .then(res => res.json())
      .then(data => setTest(data.message));
      console.log(test);
  }, []);

  return (
    <div className="App">

      <header className="App-header">
        <p>

          {test}
        </p>
      </header>
      
    </div>
  );
}

export default App;
