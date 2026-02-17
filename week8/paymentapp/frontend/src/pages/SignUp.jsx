import React from 'react'
import Heading from '../components/Heading'
import SubHeading from '../components/SubHeading'
import InputBox from '../components/InputBox'
import Button from '../components/Button'

const SignUp = () => {
  return (
    <div className=' bg-slate-300 flex h-screen justify-center p-25 '>
      <div className=' flex flex-col bg-white p-6 shadow-md rounded-2xl h-130 w-100'>
      <Heading label={"SignUp"}/>
      <SubHeading label={"Enter your information to create an account"}/>
      <InputBox label={"First Name"} placeHolder={"Name"}/>
       <InputBox label={"last Name"} placeHolder={"Name"}/>
        <InputBox label={"Email"} placeHolder={"email"}/>
         <InputBox label={"Password"} placeHolder={"password"}/>
         <div className='pt-7'>
         <Button label={"Signup"}></Button>
         
         
         </div>


      </div>
      
    </div>
  )
}

export default SignUp
