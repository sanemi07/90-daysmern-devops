import React from 'react'

const Overview = () => {
  return (
    <div className='flex w-full items-center justify-between m-4'>
       <div className='font-semibold text-2xl'>Overview</div>
       <div className=' flex gap-1 bg-white shadow-md p-2 rounded-md font-medium text-gray-500 mr-10'>This Month 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>

       </div>

      </div>
  )
}

export default Overview
