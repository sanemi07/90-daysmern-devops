import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { connectDB } from './config/connectdb.js';








const app = express();


connectDB()

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
