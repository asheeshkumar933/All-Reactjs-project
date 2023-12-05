import { useState } from "react"



function App() {

  const [counter ,setCounter] = useState(15)


function addvalue() {
  
   console.log("hello asheesh sharma")
   setCounter(counter+1)
   
  
}

function removevalue (){
  setCounter(counter-1)
}
  

  return (
    < >

    <div className="mx-20 mt-20 ">
    <h1 className="text-4xl mx-20 ">
      My Counter project !
    </h1>

    <button 
    onClick = { addvalue}

    className="mx-20 mt-20">Add value:{counter} </button>
    <br />
    <button
    onClick={removevalue} 
    className="mx-20 mt-20">Remove value:{counter}</button>
    </div>
     
    </>
  )
}

export default App
