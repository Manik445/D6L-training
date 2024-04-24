// change package.json start script for nodemon to : task2.js

const express = require('express'); 
const app = express(); 
require('dotenv').config()
const port = process.env.PORT || 5000 
 

app.post('/' , (req , res)=>{
    const dataFromClient = req.body; 
    res.json({
        username : dataFromClient.username ,
        password : dataFromClient.password , 
        message : dataFromClient.message
    }); 
 })  




app.listen(port , ()=>{
    console.log(`server starts at ${port}`)
})