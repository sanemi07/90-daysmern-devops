import { useState } from 'react'

import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  const CreateCard=()=>{

}
  return (
    <>
    <div className='flex flex-col p-4 gap-3 '>
      <input placeholder='enter title' type='text' className='border-b-cyan-950 border-2  w-100'></input>
       <input placeholder='enter description' type='text'  className='border-b-cyan-950 border-2  w-100'></input>
        <input placeholder='enter Intrest' type='text'  className='border-b-cyan-950 border-2  w-100'></input>
        <button className="rounded-2xl p-3 bg-blue-400 text-1xl w-40" onClick={CreateCard}>Create Card</button>
     
    </div>
  <Card></Card>
    
     
    </>
  )
}

export default App
