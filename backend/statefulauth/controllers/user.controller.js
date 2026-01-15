import { registerUser,loginUser } from "../services/user.service.js";





export const signUpController=async(req,res)=>{
    try {
        const {name,password}=req.body;
        if(!name || !password){
            return res.status(400).json({message:'All fields are required'});
        }
        const user=await registerUser(name,password)
        req.session.userId=user._id;
        

        return res.status(201).json({message:'User registered successfully',user})


    } catch (error) {
        return res.status(500).json({message:'Internal server error',error:error.message})
        
    }



}
export const loginController=async(req,res)=>{
    try {
        const {name,password}=req.body;
         if(!name || !password){
            return res.status(400).json({message:'All fields are required'});
        }

        const user=await loginUser(name,password);
        req.session.userId=user._id;
        return res.status(200).json({message:'Login successful',user})
    } catch (error) {
        return res.status(500).json({message:'Internal server error'})
    }

}
export const logoutController=async(req,res)=>{
    try{
        req.session.destroy((err)=>{
            if(err){
                return res.status(500).json({message:'Could not log out,try again'})
            }
        });
        return res.status(200).json({message:'Logout successful'})
    } catch(error){
        return res.status(500).json({message:'Internal server error'})
    }
}