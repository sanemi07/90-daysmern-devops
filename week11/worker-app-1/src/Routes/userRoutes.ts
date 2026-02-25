import { Hono } from "hono";
import prisma from "../db"

import zod from 'zod'
import { Context } from "hono";
import { jwt } from "jsonwebtoken";


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


router.post('/signup',async(c:Context)=>{
 try{
    const body:{
      name:string
      email:string
      password:string
    }=await c.req.json()
    const isValidBody=signupSchema.safeParse(body)
    if(!isValidBody.success){
        return c.json({msg:"invalid inputs"},400)
    }
    const user=await prisma.user.findFirst({where:{email:body.email}})
    if(!user){
      return c.json({msg:"email already exists"},401)
    }
    
    const res=await prisma.user.create({
      data:{
         name:body.name,
         email:body.email,
         password:body.password
      }
    })
    const userId=res.id
    const token=await jwt.sign(userId,"bfusifgbeuif")
    return c.json({
      msg:"regstered saccesfully",
      token,
      user:{
           userId: res.id,
        username: res.name,
        email: res.email,
      }
    })


 } catch (error) {
    return c.json(error,500)
 }
})

