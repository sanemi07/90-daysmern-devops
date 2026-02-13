import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CountContext } from './context'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { countAtom } from './store/atoms/CountAtom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <RecoilRoot>
      <Count ></Count>
      </RecoilRoot>


      
    </>
  )
}
function Count(){
  return(
    <>
    <CountRender></CountRender>
    <Button ></Button>
    </>
  )
}
function CountRender(){
  const count=useRecoilValue(countAtom) 
  return(
    <div>{count} </div>
  )
}
function Button(){
  const [count,setCount]=useRecoilState(countAtom)
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
