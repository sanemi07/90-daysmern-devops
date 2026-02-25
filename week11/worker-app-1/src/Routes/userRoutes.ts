import { Hono } from "hono";
import primsa from "../db"

import zod from 'zod'
import { Context } from "hono/jsx";


const signupSchema=zod.object({
 name:zod.string().min(5),
  email:zod.email(),
  password:zod.string()
  
})
const signinSchema=zod.object({
  name:zod.string().min(5),
  
  password:zod.string()
  
})



const router=new Hono()


router.post('/signup',async(c)=>{
 try{
    const body=c.req.json()
    const isValidBody=signupSchema.safeParse(body)
    if(!isValidBody){
        return c.json({msg:"invalid inputs"},400)
    }
    const user=await primsa.user.findFirst()

 } catch (error) {
    return c.json(error,500)
 }
})

