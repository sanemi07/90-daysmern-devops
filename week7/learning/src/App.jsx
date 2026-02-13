import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'
import React, { Suspense } from 'react'
import './App.css'
const Home=React.lazy(()=>import('./components/Home'))
const Dashboard=React.lazy(()=>import("./components/Dashboard"))
import { useEffect } from 'react'




function App() {
  return (
    <>
    <BrowserRouter>

    <AppBar/>
    <Suspense fallback={"loDING...."}>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>

   

    </Routes>
    </Suspense>
    
    
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
