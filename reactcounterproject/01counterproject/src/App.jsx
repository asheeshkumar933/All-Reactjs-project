import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)

  let addvalue = function(){
    counter = counter+1;
    setCounter(counter)

  }

  let  removevalue = function (){
    counter = counter-1;
    setCounter(counter)

  }

  return (
    <>
     <h1> counter project ||</h1>

     <h5>click add button to incrment value || click remove button to decrement value</h5>
       <button>VALUE:{counter}</button>
       <br />
     <button onClick={addvalue}>add value</button>
     <button onClick={removevalue}>remove value</button>
     
    </>
  )
}

export default App
