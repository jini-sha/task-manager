require('dotenv').config();
const app=require('./app')
const connectDB=require('./utils/db.utils');
const PORT =process.env.PORT || 3000;
connectDB();
app.listen(PORT,()=>{
    console.log('Server running on http://localhost:${PORT}');
})