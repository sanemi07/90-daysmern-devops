import { Router } from "express";
import { verify } from "../middlewares/authverify.js";
import { addTaskController, getTasksController, deleteTaskController } from "../controllers/task.controller.js";
const router=Router()


router.post('/addTask',verify,addTaskController)
router.get('/getTasks',verify,getTasksController)

router.delete('/deleteTask/:id',verify,deleteTaskController)
export default router;