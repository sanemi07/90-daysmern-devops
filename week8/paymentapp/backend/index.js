import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { connectDB } from './config/connectdb.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';








const app = express();


connectDB()

app.use(express.json())
app.use(cors())





app.use("/api/v1/users",userRoutes)

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
