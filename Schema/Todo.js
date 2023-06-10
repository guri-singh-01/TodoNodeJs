const mongoose = require("mongoose");
const todoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    created_at: {
         type: Date , 
         required: true
        },
    id: { 
        type: String ,
        required: true
    }
})
module.exports = mongoose.model("todo", todoSchema)