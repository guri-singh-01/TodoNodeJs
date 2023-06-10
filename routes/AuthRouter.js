const AuthController=require('../controller/AuthController')
const authRouter=require("express").Router()

authRouter.post("/signup",AuthController.signUp)
authRouter.post("/login",AuthController.login)
authRouter.post("/forgetPassword",AuthController.forgetPassword)
module.exports=authRouter