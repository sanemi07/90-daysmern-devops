import { useState } from 'react'
import ReveneuCard from './components/ReveneuCard'
import Navbar from './components/Navbar'
import Overview from './components/Overview'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div >
      <Navbar></Navbar>
      <Overview></Overview>
    
   </div>
   
  )
}

export default App
