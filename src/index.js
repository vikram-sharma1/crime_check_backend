

const express = require('express');
const connect = require('./configs/db')

const taskController = require('./controller/Task.controller')

const app = express();

app.use(express.json())


app.use("/",taskController)

const port = process.env.PORT || 3001

app.listen(port,async(req,res)=>{
    try {
        await connect()
        console.log("listen on port 3001")
    } catch (error) {
        console.log('error:', error)
        
    }
})