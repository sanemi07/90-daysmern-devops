import { Admin } from "../db"

// Middleware for handling auth
async function adminMiddleware(req, res, next) {


    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
const username=req.headers.username
const password=req.headers.password
if(!username||!password){
    return res.status(401).json("credentials not exist")
    
}
const admin=await Admin.findOne({username,password})
if(!admin){
      res.status(401).json("admin not exist")
      return 
}
next()


}

export default adminMiddleware