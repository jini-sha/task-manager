const express=require('express');
const app=express();
app.use(express().json);
const taskRoutes=require('./routes/task.routes');
apps.use('/tasks',taskRoutes);
module.exports=app;
