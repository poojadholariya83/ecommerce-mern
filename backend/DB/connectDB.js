//copy this two lines from mongoose documentation to setup mango
const mongoose = require('mongoose');
function connectedDB(){
    mongoose.connect('mongodb://127.0.0.1:27017/MCA')
    .then(()=>{
        console.log("DB is connected")
    })
    .catch(()=>{
        console.log("DB not connected")
    })
}
module.exports=connectedDB;