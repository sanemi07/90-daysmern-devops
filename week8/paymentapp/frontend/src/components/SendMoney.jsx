import React, { useState } from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from './InputBox'
import Button from './Button'

const SendMoney = () => {
  const [to, setTo] = useState('')
  const [amount, setAmount] = useState('')

  return (
    <div className='bg-slate-300 flex h-screen justify-center p-25'>
      <div className='flex flex-col bg-white p-6 shadow-md rounded-2xl h-100 w-100'>
        <Heading label={'Send Money'} />
        <SubHeading label={'Enter recipient and amount'} />

        <InputBox
          label={'To'}
          placeHolder={'recipient'}
          onChange={(e) => {
            setTo(e.target.value)
          }}
        />

        <InputBox
          label={'Amount'}
          placeHolder={'1000'}
          onChange={(e) => {
            setAmount(e.target.value)
          }}
        />

        <div className='mt-10'>
          <Button
            label={'Send'}
            onClick={() => {
              console.log({ to, amount })
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default SendMoney
