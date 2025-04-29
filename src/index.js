const express = require("express")
const aiRoutes = require("./routes/ai.routes")
const cors = require("cors")


const app = express()
app.use(express.json())
app.use(cors())

app.get("/get" ,(req , res)=>{
    res.send("game").status(200)
})
app.use("/ai", aiRoutes)
module.exports = app