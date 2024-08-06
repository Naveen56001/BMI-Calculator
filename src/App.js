import './App.css';
import { useState } from 'react';
import {useMemo} from 'react';

function App() {

  const [weight, setWeight] = useState(40);
  const [height, setHeight] = useState(80);

  const output = useMemo(() => {
    return ((weight / (height * height)) * 10000).toFixed(1);
  }, [weight, height]);

  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className="input-section">
        <p className="slider-output">Weight: {weight} kg</p>
        <input className='input-slider'
        type='range'
        step='1'
        min='40'
        max='200' 
        onChange={(e) => setWeight(e.target.value)}/>
        <p className="slider-output">Height: {height} cm</p>
        <input className='input-slider'
        type='range'
        step='1'
        min='80'
        max='300'
        onChange={(e) => setHeight(e.target.value)}/>
      </div>
      <div className="output-section">
        <p>Your BMI is: </p>
        <p className='output'>
          {output}
        </p>
      </div>
    </main>
  );
}

export default App;
