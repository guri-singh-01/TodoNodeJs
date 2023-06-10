const todoController=require('../controller/TodoController')
const todoRouter=require("express").Router()
const verify=require("../Middleware/verify")


todoRouter.post("/addtodo",verify,todoController.addTodo)
todoRouter.get("/gettodo",verify,todoController.getTodo)
todoRouter.put("/updatetodo",verify,todoController.updateTodo)
todoRouter.delete("/deletetodo",verify,todoController.deleteTodo)
todoRouter.get("/gettodobyid",verify,todoController.getTodoById)
module.exports=todoRouter