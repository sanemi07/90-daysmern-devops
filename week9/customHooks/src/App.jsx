import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [users,setUsers ] = useState([])

  

  return (
    <>
     {users.map((user)=>{<User user={user}/>})}
    </>
  )
}
function User({user}){
  return(
    <div>
      <div>
      {user.firstName}
      </div>
      <div>{user.lastName}</div>
    </div>
  )

}
function useUser(){
   const [users,setUsers ] = useState([])
   useEffect(()=>{
    axios.get("http://localhost:3000/api/v1/users/bulk").then((response)=>{
      setUsers(response.data)
    })
   },[])
}
export default App
