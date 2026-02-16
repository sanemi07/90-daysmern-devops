export const authMiddleware=async(req,res,next)=>{
    try {
        const authorizationHeader=req.headers.Authorization
        if(!authorizationHeadern){
            return res.status(401).json({error:"auth header not found "})
        }
        const token=authorizationHeader?.split(' ')[1]
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        if(!decoded){
              return res.status(401).json({error:"token did not match"})
        }
        req.userId=decoded.id;
        next()
    } catch (error) {
        return res.status(401).json({error:"Unauthorized"})
    }

}