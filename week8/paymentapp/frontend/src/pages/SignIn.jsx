import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'
import BottomWarning from '../components/BottomWarning'

const SignIn = () => {
  return (
    <div className='  bg-slate-300 flex h-screen justify-center p-25 '>
      <div className='flex flex-col bg-white p-6 shadow-md rounded-2xl h-100 w-100'>
        <Heading label={'SignIn'}/>
        <SubHeading label={"Enter email and password"}/>
        <InputBox label={"email"} placeHolder={"email"}/>
        <InputBox label={"password"} placeHolder={"123456"}/>
        <div className='mt-10'>
          <Button label={"SignIn"}></Button>
        </div>
        <BottomWarning label={"Dont have An Account?"} text={"SignUp"} to={"/Signup"}></BottomWarning>

      </div>
    </div>
  )
}

export default SignIn
