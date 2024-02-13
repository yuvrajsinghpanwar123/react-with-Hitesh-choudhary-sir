import { useState } from "react"
import "./App.css"


function App() {
  
 const [color , setcolor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor : color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-32">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-5 py-2 rounded-3xl">
          <button onClick={() => setcolor("red")} Red className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor : "red"}}>Red
          </button>
          <button onClick={() => setcolor("black")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor : "black"}}>Black
          </button>
          <button onClick={() => setcolor("yellow")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor : "yellow"}}>Yellow
          </button>
          <button  onClick={() => setcolor("purple")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor : "purple"}}>Purple
          </button>
          <button onClick={() => setcolor("orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
          style={{backgroundColor : "orange"}}>Orange
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
