import express from "express"
import dotenv from dotenv
import { connectDb } from "./db"
import { create } from "./types"
dotenv.config()




const app=express()




app.use(express.json())

connectDb()




app.post('/todos',(req,res)=>{
 const payload=req.body
 const  parsedPayload=create.safeParse()
})

app.put('/completed',(req,res)=>{

})

app.get('/todos',(req,res)=>{
    
})

app.listen(3000,()=>{
    console.log("server running succesfully")
})