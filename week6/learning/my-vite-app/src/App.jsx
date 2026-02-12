import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title, setTitle] = useState("hii")
  function changetitle(){
    const number=Math.random()
    setTitle(number)
  }

  return (
    <div>
      <button onClick={changetitle}>click me to change title</button>
      <Header title={`my name is ${title}`}></Header>
      <Header title={"hii"}/>
    </div>
  )
}
function Header({title}){
  return (
    <div>
      {title}
    </div>
  )

}

export default App
