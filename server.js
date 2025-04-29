require('dotenv').config()
const app= require("./src/index")


app.listen(3000,(req , res)=>{
    console.log("server connected to port :3000")
})