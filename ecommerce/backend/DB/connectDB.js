const mongoose = require('mongoose');//required for connectio with db
function connectDB(){
    mongoose.connect('mongodb://127.0.0.1:27017/MCA') // /MCA db name
    .then(()=>{
        console.log("DB conected")
    }).catch(()=>{
        console.loh("DB not connected")
    })
}
module.exports = connectDB;