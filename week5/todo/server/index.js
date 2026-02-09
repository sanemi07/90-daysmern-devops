import express from "express"
import dotenv from dotenv
dotenv.config()




const app=express()




app.use(express.json())


const schema=zod.schema
app.post('/todos',(req,res)=>{

})

app.put('/completed',(req,res)=>{

})

app.get('/todos',(req,res)=>{
    
})

app.listen(3000,()=>{
    console.log("server running succesfully")
})