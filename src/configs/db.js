

const mongoose = require('mongoose')


module.exports = ()=>{
    return mongoose.connect("mongodb+srv://crime:crime@cluster0.zluli9u.mongodb.net/?retryWrites=true&w=majority")
}

//"mongodb://localhost:27017/auth-mvc"

