import { Router } from 'express';
import adminMiddleware from '../middleware/admin.js';
import { Admin, Course } from '../db/index.js';

const router = Router();


// Admin Routes
router.post('/signup',async (req, res) => {
    // Implement admin signup logic
   try {
     const{username,password}=req.body
     if(!username||!password){
        return res.status(400).json('each field is required')
     }
     const admin =await Admin.create({
        username,
        password
     })
     res.status(201).json(admin,"admin created successfully")

   } catch (error) {
    res.status(500).json(error)
   }
    
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
  try {
      const {title,description,price,image}=req.body
      const course=await Course.create({
        title,
        description,
        price,
        image
      })
      res.status(201).json(course,"course created successfully")

  } catch (error) {
     res.status(500).json(error)
  }

});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    try {
        const response=await Course.find({})
          res.status(201).json(response)
        
    } catch (error) {
         res.status(500).json(error)
    }
});

export default router