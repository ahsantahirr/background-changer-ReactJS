import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen duration-200 flex justify-center items-end"
      style={{ backgroundColor: color }}>
      <div className="text-white h-14  flex gap-4 w-full justify-center
      bg-white p-4 mb-6 items-center">
        <button className="font-extrabold text-black w-32  rounded-3xl h-10  " onClick={() => setColor("red")} style={{ backgroundColor: "red" }}>Red</button>
        <button  className="font-extrabold text-black w-32 rounded-3xl h-10" onClick={() => setColor("green")} style={{ backgroundColor: "green" }}>Green</button>
        <button className="font-extrabold text-black w-32 rounded-3xl h-10 " onClick={() => setColor("yellow")} style={{ backgroundColor: "yellow" }}>Yellow</button>
        <button className="font-extrabold text-black w-32 rounded-3xl h-10" onClick={() => setColor("blue")}  style={{ backgroundColor: "blue" }}>Blue</button>
        <button className="font-extrabold text-black w-32 rounded-3xl h-10" onClick={() => setColor("orange")}  style={{ backgroundColor: "orange" }}>Orange</button>
        <button className="font-extrabold text-black w-32 rounded-3xl h-10" onClick={() => setColor("pink")}  style={{ backgroundColor: "pink" }}>Pink</button>
      </div>
    </div>
  )
}

export default App
