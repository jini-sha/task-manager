const {z}=require("zod");
const todoSchema=z.object({
    title:z.string().min(1,"Please enter a valid title"),
    priority: z.toString().optional(),
    status: z.string().optional(),
    deadline: z.date().optional(),
})
module.exports={todoSchema};