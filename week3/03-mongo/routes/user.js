const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    try {
         const{username,password}=req.body
         if(!username||!password){
            return res.status(400).json('each field is required')
         }
         const user =await User.create({
            username,
            password
         })
         res.status(201).json(user,"user created successfully")
    
       } catch (error) {
        res.status(500).json(error)
       }
        
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router