const express = require("express")
require("./config/db")
const api = require('./routes/api')
const PORT = 3000
const app = express()

app.use(express.json())

app.use(api)

app.listen(PORT,()=>{
    console.log("Server is running at "+PORT);
})