import mongoose from "mongoose";


const CardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    required: true
  },
  interests: [
    {
      type: String
    }
  ]
});

export const Card=new mongoose.model('cards',CardSchema)



export const connectDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            dbName:"cards"
        })
        console.log("db connected")
    } catch (error) {
        console.log("error connecting db",error)
    }
}