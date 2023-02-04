import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

function App() {

  let[count, setCount]= useState("0");
  let[data, setData]= useState("50");

  useEffect(()=>
    {
      console.log("use effect");
    },[count]
  )

  useEffect(()=>
  {
    console.log("use effect");
  },[data]
)

  return (
    <>
    <h2>Count- {count}</h2> <h2>Data- {data}</h2>
    <button onClick={()=>setCount(count+1)}>Click</button>
    <button onClick={()=>setData(data+1)}>Click</button>
    
    </>
   

  );
}

export default App;
