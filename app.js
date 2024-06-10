const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const library = require("./models/library")

const app = express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hello")
})

app.post("/contact",(req,res) =>{
    res.send("contact page")
})

app.post("/add",(req,res) =>{
    res.send("test")
})

app.listen(8080,()=>{
    console.log("Server started")
})