const Task=require('../models/task.model')

exports.createTask=async(req,res)=>{
    try{
        const newTask= new Task(req.body);
        const savedTask=await newTask.save();
        res.status(201).json(savedTask);
    }catch(err){
        res.status(500).json({message:err.message});

    }
}