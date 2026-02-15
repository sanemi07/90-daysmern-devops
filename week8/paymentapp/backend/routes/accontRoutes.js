import { Router } from "express";
import { authMiddleware } from "../middleware/auth";
import Account from "../models/account.model";
const router=Router()


router.get('/getbalance',authMiddleware ,async(req,res)=>{
    try {
        const userId=req.userId
        const balance=await Account.findOne({userId})
        return res.status(200).json({msg:`your account balance is ${balance}`})
    } catch (error) {
        return res.status(400).json(error)
    }

})
export default router