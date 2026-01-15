
import { User } from "../models/user.model.js"
import bcrypt from 'bcrypt';
export const registerUser=async(name,password)=>{
  const hashedPassword=await bcrypt.hash(password,10);
  const user=new User({
    name,
    password:hashedPassword
  });
  await user.save()
  return user;

  }


export const loginUser=async(name,password)=>{
    const user=await User.findOne({name});
    if(!user||!(await bcrypt.compare(password,user.password))){
        throw new Error('Invalid credentials');

    }
    return user;


}