 import express from "express"
import { WebSocket, WebSocketServer } from "ws"
 


const app=express()

const server=app.listen(8080)
const wss=new WebSocketServer({
    server
   
})


wss.on("connection",function connection(ws){
    ws.on("error",console.error)
    ws.on("message",function message(data){
        console.log(`recieved msg ${data}`)

    })
    ws.send("something")

})



