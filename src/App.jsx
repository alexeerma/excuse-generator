import { useEffect, useState } from 'react'
import Axios from 'axios';
import './App.css'

function App() {
  const [excuse, setExcuse] = useState("")
  



  const fetchData = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then((res) => {
      setExcuse(res.data[0].excuse);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
      <div className='App'>
        <h1>Generate An Excuse</h1>
        <button onClick={() => fetchData("party")}>Party</button>
        <button onClick={() => fetchData("family")}>Family</button>
        <button onClick={() => fetchData("office")}>Office</button>

        <p>{excuse} </p>
      </div>
  )
}

export default App
