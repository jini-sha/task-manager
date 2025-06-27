const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller');
const validateToDo=require('../middlewares/validateTasks.middleware')

router.post('/',validateToDo, taskController.createTask);
router.get('/', taskController.getAllTasks);
router.put('/:id',validateToDo, taskController.updateTask);
router.delete('/:id', taskController.deleteTask);
module.exports = router;

