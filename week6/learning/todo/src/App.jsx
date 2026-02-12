import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 function addTodo(){
  
 }

  return (
    <>
    <button>Add Todo</button>
     <RenderTodo></RenderTodo>
    </>
  )
}
function RenderTodo(){
  const {todo,setTodo}=useState([])
   const dummyTodos = [
    { title: 'Buy groceries', desc: 'Milk, eggs, and bread' },
    { title: 'Study React', desc: 'Finish hooks lesson' },
    { title: 'Workout', desc: '30 minutes of cardio' },
  ]
  return (
   <div>
    {dummyTodos.map((item)=>(
      <Todo title={item.title} desc={item.desc}></Todo>
    )

    )}
   </div>
  )




}

function Todo({title,desc}){
  return (
    <div>
      <h1>{title}</h1>
      <h2>{desc}</h2>
    </div>
  )
}

export default App
