import React, {useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [data, setData] = useState([])

  useEffect( async ()=>{
    const {data}  = await axios.get("https://jsonplaceholder.typicode.com/todos", { headers: {} })
    console.log(data);
    setData(data)
  },[])


  return (
    <div className="App">
      <span>
        {JSON.stringify(data)}
      </span>
    </div>
  );
}

export default App;
