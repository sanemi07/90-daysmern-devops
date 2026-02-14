import mongoose, { mongo, Mongoose } from "mongoose";
const UserSchema=new Mongoose.Schema({
    firstName:{
        typeof:String,
        required:true

    },lastName:{
        typeof:String,
        required:true
    },
    password:{
        typeof:String,
        required:true}
    
})

const User=mongoose.model("User",UserSchema);
export default User
