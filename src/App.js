import { useState } from "react";
import axios from "axios";

import './App.css';

function App() {
  var result=String({step1: { carryString: '1_', sumString: '3' }});
  const [status, setStatus] = useState(null);
    const[data,setData] = useState({
      fn1: 0,
      fn2: 0
    });
    const handleSubmit = (event) => {
      event.preventDefault();
      if (!data.username || !data.password) {
        setStatus(false);
      } else {
        setStatus(true);
      }
      const obj ={
        num1:data.fn1,
        num2:data.fn2
      }
      console.log(obj);
      axios.post("http://localhost:3001/stepAddition",obj).then((response)=>{
        setStatus(true);
        
      console.log(response.data);
   })
    };
   const handleChange =(event) =>{
       let { name, value } = event.target;
      setData({ ...data, [name]: value })
   }
  
  return (
    <div className="App">
     <label htmlFor="fn1">First Number:</label>
     <input type="number" id="fn1" name="fn1" value={data.fn1} onChange={handleChange}/><br></br>
     <label htmlFor="fn2">Second Number:</label>
     <input type="number" id="fn2" name="fn2" value={data.fn2} onChange={handleChange}/><br></br>
     <button type="submit" onClick={handleSubmit}>Generate steps</button>
    
    </div>
    
  );
}

export default App;


