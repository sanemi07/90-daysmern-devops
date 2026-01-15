 import mongoose from "mongoose"
 export const connectDb=async()=>{
    const db= await mongoose.connect(process.env.MONGO_URI,{
        dbName:'authdemo'
    })
    console.log(`Mongodb connected to ${db.connection.host}:${db.connection.port}`);
}
