import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setcounter] = useState(15)
  
  const addValue = () =>{
    if(counter >= 0 && counter < 20) setcounter(counter+1) ;
    else setcounter(0);
    
  }

  const removeValue = () => {
    if(counter > 0 && counter <= 20 ) setcounter(counter-1);
    else setcounter(20);
  }

  return (
      <>
      <h1>chai aur react</h1>
      <h3>counter value : {counter}  </h3>
      <button onClick={addValue}
      >Add value : {counter}</button>
      <br />
      <button onClick={removeValue}
      >Remove value : {counter}</button>
      

      </>
  )
}

export default App
