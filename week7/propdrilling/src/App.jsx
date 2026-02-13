import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './context'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CountContext.Provider value={count}>
      <Count setCount={setCount}></Count>

    </CountContext.Provider>
      
    </>
  )
}
function Count({setCount}){
  return(
    <>
    <CountRender></CountRender>
    <Button setCount={setCount}></Button>
    </>
  )
}
function CountRender(){
  const count=useContext(CountContext) 
  return(
    <div>{count} </div>
  )
}
function Button({setCount}){
  const count=useContext(CountContext) 
  return(
    <div>
    <button onClick={()=>{
      setCount(count+1)
    }}>increase</button>
    <button onClick={()=>{
      setCount(count-1)
    }}>decrease</button>
    </div>
  )


}

export default App
