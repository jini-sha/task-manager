const mongoose=require(mongoose);
const taskSchema= new mongoose.Schema({
  title: String,
  priority: String,
  status:String,
  deadline: String,
})
const Task = mongoose.model('Task', taskSchema);
module.exports= Task