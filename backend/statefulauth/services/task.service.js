export const createTask=async(userId,title,description)=>{
    const task=new Task({
        userId,
        title,
        description
    });
    return await task.save();
}   
export const getTasksByUserId=async(userId)=>{
    return await Task.find({userId});
}

export const deleteTaskById=async(taskId)=>{
    return await Task.findByIdAndDelete(taskId);
}
