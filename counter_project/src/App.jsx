import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let  [counter, setCounter] = useState(0)


    
  const addvalue = function(){
    if(counter<50){
      counter = counter+1;
    }
   
    setCounter(counter)
  }
  
  
  const removevalue = function(){

    if(counter>0){
      counter = counter-1;

    }
    
    setCounter(counter)
  }

  

  

  return (
    <>
      <h1>Counter project || </h1>

      <h4>Click add button to increment value || Click remove button to decrement value</h4>

      <button> value is: {counter}</button>
      <br />
      <button onClick={addvalue}>add value</button>
      <button  onClick={removevalue}>remove value</button>
    </>
  )
}

export default App
