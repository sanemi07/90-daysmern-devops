import { Router } from "express";
import zod from "zod";





const UserSchema=zod.object({
    email:zod.string().email(),
    password:zod.string().min(6),
    firstName:zod.string().min(1),
    lastName:zod.string().min(1)
    
})

const router=Router();

router.post('/signup',async(req,res)=>{
    try {
        const {email,password,firstName,lastName}=req.body;
        const validatedData=UserSchema.safeParse({email,password,firstName,lastName})
        if(!validatedData.success){
            return res.status(400).json({error:validatedData.error.errors})
        }
        
    } catch (error) {
        return res.status(400).json({error:error.message})
    }
})




export default router;