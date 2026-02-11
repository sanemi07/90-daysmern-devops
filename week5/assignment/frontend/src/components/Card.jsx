import React from 'react'

const Card = (props) => {





  return (
    <div className='h-100 w-100 rounded-3xl   bg-amber-200 flex flex-col p-8 shadow-2xl'>
      <div className=' p-4 flex flex-col'>
        <h1 className=' font-bold text-3xl'>Title</h1>
        <h2 className='mt-2 font-semibold'>description</h2>

      </div>
      <div className=' p-4 flex flex-col'>
        <h1 className=' font-semibold text-2xl'>Interests</h1>
        <h1>
            ionic
        </h1>
         <h1>
            open source
        </h1>
         <h1>
            App dev
        </h1>
      </div>
      <div className=' p-4 flex flex-row gap-4 '>
        <button className="rounded-2xl p-3 bg-blue-400 text-1xl">LinkedIn</button>
        <button className="rounded-2xl p-3 bg-blue-400 text-1xl">Twitter</button>
      </div>
    </div>
  )
}

export default Card
