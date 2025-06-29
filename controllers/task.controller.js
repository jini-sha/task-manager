const Task = require('../models/task.model');
const { StatusCodes } = require('http-status-codes');

exports.createTask = async (req, res, next) => {
  try {
    const newTask = new Task(req.body);
    const savedTask = await newTask.save();
    res.status(StatusCodes.CREATED).json(savedTask);
  } catch (err) {
    next(err)
  }
};

exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    next(err)
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedTask) {
      const error = new Error('Task not found');
      error.statusCode = StatusCodes.NOT_FOUND;
      return next(error);
    }
    res.json(updatedTask);
  } catch (err) {
    next(err);
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
      const error = new Error('Task not found');
      error.statusCode = StatusCodes.NOT_FOUND;
      return next(error);
    }
    res.json({ message: 'Task deleted' });
  } catch (err) {
    next(err);
  }
};
