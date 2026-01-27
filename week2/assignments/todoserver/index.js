import { error } from 'console'
import express from 'express'
import fs from 'fs/promises'


const app=express()


app.use(express.json())







async function readFile(){
    const data= await fs.readFile('todo.txt','utf-8')
    const parsedData=JSON.parse(data)
    return parsedData

}
async function writeFile(array) {
    const str=JSON.stringify(array)

    const data=await fs.writeFile('todo.txt',str)
    
}



app.get('/todos',async(req,res)=>{
    //return all the todo objects in json from file 
    try {
       const data= await readFile()
       res.status(200).json(data)
        
    } catch (error) {
        res.status(500).json(error)
    }

})

app.get('/todos/:id',async(req,res)=>{
    try {
        const data=await readFile()
        const id=req.params.id
        
        const todo=data.find((item)=>item.id===id)
        if(!todo){
            res.status(404).json('id not exist')
        }else{
         res.status(200).json(todo)}
        
    } catch (error) {
         res.status(500).json(error)
    }
})

app.post('/todos',async(req,res)=>{
    try {
        
        
    } catch (error) {
        res.status(500).json(error)
    }

})



app.listen(3000,()=>{
    console.log('server running')
})