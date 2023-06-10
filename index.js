const dbo = require("./Connection//db");
const express=require("express");
const app=express()
const cors=require("cors")
const authRouter=require("./routes/AuthRouter");
const todoRouter = require("./routes/TodoRouter");
const mongoose=require("mongoose")
const port=5050;
app.use(express.json());
app.use(cors())
require("dotenv").config();
dbo()
// mongoose.connect(
//   "mongodb://127.0.0.1:27017/todolist",
//   { useNewUrlParser: true,
//     useUnifiedTopology: true },
//   () => console.log("connected to DB")
// );
app.use("/user",authRouter)
app.use("/todo",todoRouter)
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});