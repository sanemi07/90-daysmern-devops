
import ReveneuCard from './components/ReveneuCard'
import Navbar from './components/Navbar'
import Overview from './components/Overview'

function App() {

  

  return (
    <div >
      <Navbar></Navbar>
      <Overview></Overview>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
        <ReveneuCard   title={"Next Payout"} amount={"2312.23"} orders={"23"}></ReveneuCard>
        <ReveneuCard title={"Amount Pending"} amount={"92,312.20"} orders={"13"}></ReveneuCard>
        <ReveneuCard title={"Amount Processed"} amount={"23,92,31212.19"} orders={"0"} ></ReveneuCard>

      </div>
    
   </div>
   
  )
}

export default App
