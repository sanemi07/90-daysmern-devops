import React from 'react'
import Appbar from '../components/Appbar'
import Balance from '../components/Balance'

const DashBoard = () => {
  return (
    <div>
      <Appbar></Appbar>
      <div className='mt-2 p-4'>
        <Balance></Balance>
      </div>
    </div>
  )
}

export default DashBoard
