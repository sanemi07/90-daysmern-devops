import { useState } from 'react'
import ReveneuCard from './components/ReveneuCard'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className=' grid grid-cols-1 md:grid md:grid-cols-3 '>
   <ReveneuCard title={"Amount Pending"} amount={"92,312.20"} orders={"13"}></ReveneuCard>
   </div>
  )
}

export default App
