const express = require('express')

const Task = require('../model/task.model')


const router = express.Router()

router.post("",async(req,res) => {
    try {
        
        const task = await Task.create(req.body)

        return res.send(task)


    } catch (error) {
        return res.send(error.message)
    }
})

router.get("",async(req,res) => {
    try {
      
        const  task = await Task.find().sort({ 'createdAt' : -1 }).lean().exec()
        return res.send(task)


    } catch (error) {
        return res.send(error.message)
    }
})



module.exports = router