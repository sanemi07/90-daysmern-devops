import mongoose, { Mongoose } from "mongoose";
import { boolean, string } from "zod";
export const connectDb=async ()=>{
  try {
    await mongoose.connect(process.env.MONGO_URI,{
        dbName:"todo"
    })
    console.log("database connected")
  } catch (error) {
    throw new Error(error)
  }
}

const TodoSchema= Mongoose.Schema({
    title:{
        typeof:string
    },
    description:{
        typeof:string
    },
    status:{
        typeof:boolean
    }
})
export const Todo=new Mongoose.model('todos',TodoSchema)
