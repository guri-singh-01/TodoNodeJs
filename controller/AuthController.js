const authSchema = require("../Schema/Auth")
const {encrypt,decrypt}=require("../utils/utilsFunction")
const Jwt = require('jsonwebtoken')
const jwtKey = "guri"
const signUp = async (req, res) => {
  const email=decrypt(req.body.email)
  
  try {
    const data = await authSchema.find({ email: email })
    if (data.length >0) {
      res.send({msg:"Email Already Exists" , type:"error"})
    }
    else {
     
      try {
        const data = await authSchema.create({
          name:req.body.name,
          email:email,
          password:req.body.password
        })
        res.send({msg:"Account Created Sucessfully" , type:"success"})
      } catch (err) {
        console.log("something went wrong", err)
        
      }

    }
  } catch (err) {
    console.log("something went wrong", err)

  }
}

const login = async (req, res) => {
  console.log("fDFDFD",req.body.password);
  const email=decrypt(req.body.email)
  const password=decrypt(req.body.password)
  try {
    const data = await authSchema.find({ email: email , password:req.body.password })
    console.log("find", data)
    if (data.length > 0) {
      const encoded_id = encrypt(data[0].id)
      const encoded_email = encrypt(data[0].email)
      const encoded_name = encrypt(data[0].name)
      let datas = ({ id: encoded_id, email: encoded_email  ,name:encoded_name})
      Jwt.sign({ datas }, jwtKey, { expiresIn:"2h" }, (err, token) => {
          if (err) {
              res.send("Something Went Wrong")
          }
          res.send({ email:datas.email, id:datas.id, name:datas.name, auth: token ,msg:"login sucessfully" })
      })
    }
    else {
     
      res.send({msg:"Please enter valid Email & Password" ,type:"error"})

    }
  } catch (err) {
    console.log("something went wrong", err)

  }
}


const forgetPassword = async (req, res) => {
  const email=decrypt(req.body.email)
  const password=req.body.password
  const id=decrypt(req.body.id)
  try {
    let db=""
    const data = await authSchema.find({ email: email })
    db=data[0]._id
    if (data.length > 0) {
      
     if(data.password === password){
      res.send({msg:"Please don't enter previous password" ,type:"error"})
    }
    else{

      try {
        const data = await authSchema.findByIdAndUpdate({_id:db},{password:password})
        res.send({msg:"success",data:data})
      } catch (err) {
        console.log("something went wrong", err)
    
      }

    }
  }
  else{
    res.send({msg:"Enter valid email address to reset password" ,type:"error"})
  }
  } catch (err) {
    console.log("something went wrong", err)

  }
}
module.exports = { signUp,login ,forgetPassword}