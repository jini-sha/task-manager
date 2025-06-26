const express=require('express');
const router =express.Router();
const taskController=require('../controllers/task.controller');
router.post('/tasks',taskController.createTask);
router.get('/tasks',taskController.getAllTasks);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);
module.exports=router;