const express = require('express');
const mongoose=require('mongoose');

const PORT = 3000;
const app = express()

app.use(express.json());


// let tasks = []; Store data in array if not database

//Connect Database
async function connectDB(){
  try{
    await mongoose.connect('mongodb://localhost:27017/tasksdb');
  }catch(err){
    console.log('Error Connecting Database',err);
  }
}
connectDB()

const taskSchema= new mongoose.Schema({
  title: String,
  priority: String,
  status:String,
  deadline: String,
})
const Task = mongoose.model('Task', taskSchema);//name of the collection ( automatically lowers and pluralizes task)


// Create a new task
app.post('/tasks',async (req, res) => {
  // const { title, priority, status, deadline } = req.body;
  // const newTask = { id: Date.now(), title, priority, status, deadline };
  // tasks.push(newTask);
  // res.status(201).json(newTask);

  try{
    const newTask=new Task(req.body);
    const savedTask=await newTask.save();
    res.status(201).json(savedTask);
  }catch (err){
    res.status(500).json({ message: err.message });
  }});

// Get all tasks
app.get('/tasks',async (req, res) => {
  try{
    const tasks=await Task.find();
    res.json(tasks);
  }catch(err){
      res.status(500).json({message: err.message})
  }
});

// Update a task by id
app.put('/tasks/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


// Delete a task by id
app.delete('/tasks/:id', async(req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    if (!deletedTask) {
      return res.status(404).json({ message: 'Task not found' });
    }
    res.json({ message: 'Task deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  // const id = Number(req.params.id);
  // tasks = tasks.filter(t => t.id !== id);
  // res.json({ message: 'Task deleted' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

