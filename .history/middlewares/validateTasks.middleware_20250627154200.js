
const {todoSchema}=require('../validations/task.validation')
function validateTodo(req,res,next){
    const validation=todoSchema.safeParse(req.body);
    //safeParse() checks if req.body matches the schema rules.
    if (!validation.success){
        const errors=validation.error.errors.map(err=>({
            path: err.path.join('.'),
            message: err.message,
        }));

    return res.status(400).json({
        success:false,
        message:"Validation error",
        error:"Input Data Not Valid",
        validationErrors: errors,
    });
}
next();
}
module.exports=validateTodo;
