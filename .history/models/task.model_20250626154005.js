const mongoose=requires('mongoose');
const taskSchema= new mongoose.Schema({
  title: String,
  priority: String,
  status:String,
  deadline: String,
})
const Task = mongoose.model('Task', taskSchema);//name of the collection ( automatically lowers and pluralizes t)he name

module.exports= Task