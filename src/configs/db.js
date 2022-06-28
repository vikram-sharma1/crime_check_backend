

const mongoose = require('mongoose')


module.exports = ()=>{
    return mongoose.connect("mongodb+srv://gourab:gourab2001@cluster0.fgw7e.mongodb.net/?retryWrites=true&w=majority")
}

//"mongodb://localhost:27017/auth-mvc"

