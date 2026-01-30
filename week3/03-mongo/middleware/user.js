import { User } from "../db"

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username=req.headers.username
    const password=req.headers.password
    if(!username||!password){
        return res.status(401).json("credentials not exist")
        
    }
    const user=await User.findOne({username,password})
    if(!user){
          res.status(401).json("user not exist")
          return 
    }
    next()
}

export default userMiddleware;