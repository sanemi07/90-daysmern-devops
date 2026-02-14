import { useState } from 'react'
import ReveneuCard from './components/ReveneuCard'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar></Navbar>
   </div>
   
  )
}

export default App
