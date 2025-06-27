const Task = require('../models/task.model');
const { StatusCodes } = require('http-status-codes');

exports.createTask = async (req, res) => {
  try {
    const newTask = new Task(req.body);
    const savedTask = await newTask.save();
    res.status(StatusCodes.CREATED).json(savedTask);
  } catch (err) {
    next(err)
  }
};

exports.getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    next(err)
  }
};

exports.updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!updatedTask) {
      return next(err);
    }
    res.json(updatedTask);
  } catch (err) {
    next(err);
  }
};

exports.deleteTask = async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
      return next(err);
    }
    res.json({ message: 'Task deleted' });
  } catch (err) {
    next(err);
  }
};
