import { Router } from "express";
import { signUpController, logoutController, loginController } from "../controllers/user.controller.js";

const app=Router()


app.post('/register',signUpController)
app.post('/login',loginController)
app.post('/logout',logoutController)

export default app;