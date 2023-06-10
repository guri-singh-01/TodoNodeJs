const mongoose=require("mongoose");
const ConnectDb=async()=>{
    try{
        await mongoose.connect(process.env.DB_URL)
        console.log("Database connected Sucessfully")

    }
    catch(err){
        console.log("Something Went Wrong",err)
    }
}
module.exports=ConnectDb



