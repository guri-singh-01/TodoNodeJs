const todoSchema = require("../Schema/Todo")
const {decrypt}=require("../utils/utilsFunction")
const addTodo = async (req, res) => {
  const id=decrypt(req.body.id)
  try {
        const data = await todoSchema.create({title:req.body.title,description:req.body.description,id:id,created_at:req.body.created_at})
        res.send({msg:"Todo Added Successfully"})

  } catch (err) {
    console.log("something went wrong", err)

  }
}

const getTodo = async (req, res) => {
  const id=decrypt(req.query.id)
    try{
      const data = await todoSchema.find({id:id})
      res.send({msg:"success",data:data})
    } catch (err) {
      console.log("something went wrong", err)
  
    }
  }

  const updateTodo = async (req, res) => {
    const id=req.body.id
    try {
      const data = await todoSchema.findByIdAndUpdate({_id:id},{title:req.body.title,description:req.body.description})
      res.send({msg:"Data Updated Sucessfully",data:data ,type:"success"})
    } catch (err) {
      console.log("something went wrong", err)
  
    }
  }

  const deleteTodo = async (req, res) => {
    const id=req.query.id
    try {
      const data = await todoSchema.deleteOne({_id:id})
      res.send({msg:"Delete",data:data})
    } catch (err) {
      console.log("something went wrong", err)
  
    }
  }
  

  const getTodoById = async (req, res) => {
      try{
        const data = await todoSchema.findById(req.query.id)
        res.send({msg:"success",data:data})
      } catch (err) {
        console.log("something went wrong", err)
    
      }
    }

module.exports = { getTodo,addTodo,deleteTodo,updateTodo,getTodoById }