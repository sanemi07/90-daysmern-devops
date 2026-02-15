import mongoose, { mongo, Mongoose } from "mongoose";
import { jwt } from "jsonwebtoken";
const UserSchema=new Mongoose.Schema({
    email:{ 
        typeof:String,
        equired:true,
        unique:true
    },
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



export const generateToken=(user)=>{
    return jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:'1d'})
}
export const hashPassword=(password)=>{
    return bcrypt.hash(password,10)

}
export const comparePassword=(password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword)
}