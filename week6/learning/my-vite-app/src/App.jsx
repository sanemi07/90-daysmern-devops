import { useState } from 'react'

import './App.css'

function App() {
  const [title, setTitle] = useState("hii")
  function changetitle(){
    const number=Math.random()
    setTitle(number)
  }

  return (
    <div>
      <HeaderWithButton/>
      <Header title={"hii"}/>
    </div>
  )
}
function HeaderWithButton(){
  const [title, setTitle] = useState("hii")
  function changetitle(){
    const number=Math.random()
    setTitle(number)
  }
  return (
    <div>
      <button onClick={changetitle}>click me to change title</button>
             <Header title={`my name is ${title}`}></Header>

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
