import React, { useState } from 'react'


const Users = () => {
  const [filter,setFilter]=useState('')
  const [users,setUsers]=useState([])
  return (
    <div className='flex flex-col p-4'>
      <div className='font-bold text-2xl '>Users</div>
      <input onChange={(e)=>{
        setFilter(e.target.value)
      }} placeholder='search' className='shadow rounded-md p-2 mt-2'></input>
      <div className='mt-4'>
        <User></User>
      </div>
      
      
      
    </div>
  )
}
const  User = ({user})=>{
  return(
    <>
    <div className='flex justify-between'>
      <div className='flex  p-2'>
        <div className=' flex justify-center bg-slate-400 rounded-full h-10 w-10 text-white pt-2 '>h</div>
        <div className='font-md p-2  '>harkirat Singh</div>
      </div>
      <button className='bg-black text-white font-semibold 
      rounded-2xl p-2 h-10 w-25 hover:shadow-2xl '>Send </button>
      
    </div>


    </>
  )

}

export default Users
