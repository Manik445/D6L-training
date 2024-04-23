const express = require('express'); 
const app = express(); 
require('dotenv').config()
const port = process.env.PORT || 5000 
const fs = require('fs'); 

app.listen(port , ()=>{
    console.log(`server is started at ${port}`)
})

app.get('/' , (req , res)=>{
    res.send('hello from server')
})

app.get('/readfile' , (req , res)=>{
    const filepath = 'hello.txt'

    fs.readFile(filepath , 'utf-8' , (err , data)=>{
        if(err){
            return res.send(`Error occured ${err}`)
        }
        res.send(data);
    })
})

app.get('/writefile' , (req , res)=>{
    const filepath = 'newFile.txt'
    const content = 'File has been written sucessfully'


    fs.writeFile(filepath , content , 'utf8' , (err)=>{
        if(err){
            res.send(`Errror Wrting the file ${err}`); 
        }
        res.send('File has been written Sucessfullly')
    }) 
})

app.use((req , res , next)=>{
    console.log(`Request recevied ${req.method} ${req.url}`); 
    next(); 
})

// for basic res 
app.get('/manik' , (req , res)=>{
    res.send('hello from Manik')
})

// route that send a json data 
app.get('/json' , (req , res)=>{
    const data = {message : 'Hello json'}
    res.json(data); 
})

app.get('/redirect' , (req , res)=>{
    res.redirect('/manik')
})

// Error handling 
app.use('/api/data' , (req , res)=>{
    // res.status(404).send('404 Error!!')
    const jsondata = {
        message : 'This is Data from Json' , 
        timestamp : new Date() 
    }
    res.send(jsondata); 
})

app.get('/error404' , (req , res)=>{
    return res.status(404).send('Error 404 Occured!!')
})

