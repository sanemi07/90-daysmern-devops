import mongoose, { Types } from "mongoose";
import { object } from "zod";

const accountSchema=new mongoose.Schema({
    userId:{
        typeof:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true
    },balance:{
        typeof:Number,
        required:true
        
    }
})
const  Account=mongoose.model('account',accountSchema)
export default Account