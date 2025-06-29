const express=require('express');
const app=express();
app.use(express.json());
const taskRoutes=require('./routes/task.routes');
app.use('/tasks',taskRoutes);

const errorMiddleware = require('./middlewares/error.middleware');
app.use(errorMiddleware);
module.exports=app;