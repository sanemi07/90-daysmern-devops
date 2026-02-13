import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Dashboard from './components/Dashboard'
import { useEffect } from 'react'




function App() {
  return (
    <>
    <BrowserRouter>
    <AppBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>

   

    </Routes>
    
    
    </BrowserRouter>
     
    </>
  )
}
function AppBar(){
  const navigate=useNavigate()
  
  return(
    <div>
      <button onClick={()=>{
        navigate('/')
      }}>Home</button>
      <button onClick={()=>{
        navigate('/Dashboard')
      }}>DashBoard</button>
    </div>
  )
}

export default App
