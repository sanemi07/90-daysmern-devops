import { Router } from "express";
import zod from "zod";
import User from "../models/user.model.js";
import { hashPassword } from "../models/user.model.js";
import { authMiddleware } from "../middleware/auth.js";






const SignupSchema=zod.object({
    email:zod.string(),
    password:zod.string().min(6),
    firstName:zod.string().min(1),
    lastName:zod.string().min(1)
    
})
const loginSchema=zod.object({
    email:zod.string(),
    password:zod.string().min(6)
})
const updateSchema=zod.object({
   password:zod.string().optional(),
    firstName:zod.string().optional(),
    lastName:zod.string().optional(),

})

const router=Router();

router.post('/signup',async(req,res)=>{
    try {
        const {email,password,firstName,lastName}=req.body;
        const validatedData=SignupSchema.safeParse({email,password,firstName,lastName})
        if(!validatedData.success){
            return res.status(400).json({error:validatedData.error.errors})
        }
        const userExists=await User.findOne({email})
        if(userExists){
            return res.status(400).json({error:"User already exists"})
        }
        const hashedPassword=await hashPassword(password)
        const user=await User.create({email,password:hashedPassword,firstName,lastName})
        const token=generateToken(user)
        return res.status(201).json({message:"User created successfully",token})

    } catch (error) {
        return res.status(400).json({error:error.message})
    }
})
router.post('/signin',async(req,res)=>{
    try {
        const{email,password}=req.body;
        const validatedData=loginSchema.safeParse({email,password})
        if(!validatedData.success){
            return res.status(400).json({error:validatedData.error.errors})
        }
        const user=await User.findOne({email})
        if(!user){
            return res.status(400).json({error:"Invalid credentials"})
        }
        const isPasswordValid=await comparePassword(password,user.password)
        if(!isPasswordValid){
            return res.status(400).json({error:"Invalid credentials"})
        }
        const token=generateToken(user)
        return res.status(200).json({message:"Login successful",token})
    } catch (error) {
        return res.status(400).json({error:error.message})
    }

})
router.put('/',authMiddleware,async(req,res)=>{
    try {
        const {success}=updateSchema.safeParse(req.body){
            if(!success){
                return res.status(400).json({msg:"invalid format"})
            }
        }
        
    }catch(error) {
       
        return res.status(400).json({error:error.message})
    }

    
})





export default router;