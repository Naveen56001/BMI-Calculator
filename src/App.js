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
    <main className="flex flex-col items-center text-center bg-white font-sans w-[90vw] max-w-[500px] mx-auto mt-12 mb-5">
      <h1 className="bg-[#1b1096] text-white w-full mb-3 text-4xl px-5 py-3">BMI Calculator</h1>
      <div className="w-[70%]">
        <p>Weight: {weight} kg</p>
        <input className="w-full mt-1"
        type='range'
        step='1'
        min='40'
        max='200' 
        onChange={(e) => setWeight(e.target.value)}/>
        <p>Height: {height} cm</p>
        <input className="w-full mt-1"
        type='range'
        step='1'
        min='80'
        max='300'
        onChange={(e) => setHeight(e.target.value)}/>
      </div>
      <div>
        <p>Your BMI is: </p>
        <p className="px-5 py-3 rounded-full bg-[#1b1096] mt-3 text-[#fff] mb-1">
          {output}
        </p>
      </div>
    </main>
  );
}

export default App;
