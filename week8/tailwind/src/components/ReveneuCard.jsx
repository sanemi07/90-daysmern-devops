import React from 'react'

const ReveneuCard = ({title,amount,orders}) => {
  return (
    <div className='bg-white p-8 shadow-md rounded-2xl '>
        <div className='flex gap-2 text-gray-400 font-medium mb-4 '>{title} 
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                   </svg>

        </div>
        <div className='flex justify-between mt-2 mb-2 '>
            <div className='font-bold text-2xl '>₹{amount}</div>
            <div className='text-blue-700 underline font-semibold'>{orders?<div className='flex'>
                
                {orders} Orders
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
                </div>:none}
                </div>
        </div>
      
    </div>
  )
}

export default ReveneuCard
