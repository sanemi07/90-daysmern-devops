import mongoose from "mongoose";
import { PassThrough } from "supertest/lib/test";


// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI);

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
username:String,
password:String,


});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username:String,
password:String,
purchasedCourses:[{
    type:mongoose.Types.ObjectId,
    ref:"Course"
}]
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title:String,
    description:String,
    price:Number,
    image:String
});

export const Admin = mongoose.model('Admin', AdminSchema);
export const User = mongoose.model('User', UserSchema);
export const Course = mongoose.model('Course', CourseSchema);

