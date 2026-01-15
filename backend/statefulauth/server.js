import express from 'express';
import dotenv from 'dotenv';
import session from 'express-session';

import { connectDb } from './config/db.js';
import authRoutes from './routes/user.route.js';
import taskRoutes from './routes/task.route.js';



dotenv.config()



const app=express()



app.use(express.json())
app.use(session({
    secret:process.env.SESSION_SECRET,
    resave:false,
    insaveUninitialized:true,
    cookie:{maxAge:1000*60*60*24} //1 day
}))










app.get('/',(req,res)=>{
    res.send('Hello World!')
}   )

app.use('/api/v1/users',authRoutes)
app.use('/api/v1/tasks',taskRoutes)


connectDb().then(() => {
    app.listen(process.env.PORT || 3000, () => {
        console.log(`Server is running on port ${process.env.PORT || 3000}`);
    });
}).catch((err) => {
    console.log('Failed to connect to database', err);
});

