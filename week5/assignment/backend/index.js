import dotenv from "dotenv";
dotenv.config()
import express from "express"
import { connectDb } from "./db.js";



const app=express()
app.use(express.json())

connectDb()


app.get('/cards',(req,res)=>{

})

app.post('/cards',(req,res)=>{
    
})

app.put('/card',(req,res)=>{
    
})

app.delete('/card',(req,res)=>{
    
})


app.listen(process.env.PORT,()=>{
    console.log("server running ")
})