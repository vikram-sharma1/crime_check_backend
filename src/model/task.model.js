

const mongoose = require('mongoose')


const TaskSchema =  mongoose.Schema({

    //id:{type: Number, required: true},
    taskName: {type:String, required:true,unique:true},
    userName:{type:String, required:true}

},{
    versionKey:false,
    timestamps:true,
})


const Task = mongoose.model('task',TaskSchema)

module.exports = Task;
