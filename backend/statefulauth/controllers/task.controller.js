import { createTask, getTasksByUserId,  deleteTaskById } from "../services/task.service.js";

export const addTaskController=async(req,res)=>{
    try{
        const {title,description}=req.body;
        if(!title || !description){
            return res.status(400).json({message:'All fields are required'});
        }
        const userId=req.session.userId;
        const task=await createTask(userId,title,description);
        return res.status(201).json({message:'Task created successfully',task})
    } catch(error){
        return res.status(500).json({message:'Internal server error'})
    }
}
export const getTasksController=async(req,res)=>{
    try{
        const userId=req.session.userId;
        const tasks=await getTasksByUserId(userId);
        return res.status(200).json({tasks})
    } catch(error){
        return res.status(500).json({message:'Internal server error'})
    }
}
export const deleteTaskController=async(req,res)=>{
    try{
        const taskId=req.params.id; 
        const userId=req.session.userId;
        const task=await getTaskById(taskId);
        if(!task){  
            return res.status(404).json({message:'Task not found'});

        }
        if(task.userId.toString()!==userId){
            return res.status(403).json({message:'Forbidden'});
        }   
        await deleteTaskById(taskId);
        return res.status(200).json({message:'Task deleted successfully'})

    } catch(error){
        return res.status(500).json({message:'Internal server error'})
    }           }
