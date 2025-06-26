const mongoose=require('mongoose');
async function connectDB(){
  try{
    await mongoose.connect('process.env.db_url');
  }catch(err){
    console.log('Error Connecting Database',err)
    process.exit(1);
  }
}
connectDB()