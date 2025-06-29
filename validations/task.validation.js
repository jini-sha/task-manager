const {z}=require("zod");
const todoSchema=z.object({
    title:z.string().min(1,"Please enter a valid title"),
    priority: z.string().optional(),
    status: z.string().optional(),
    deadline: z.string().optional().refine(val => !val || !isNaN(Date.parse(val)), {
  message: "Invalid date format",
})
})
module.exports={todoSchema};