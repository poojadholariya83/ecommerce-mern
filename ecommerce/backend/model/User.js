const mongoose = require('mongoose');

const userSchema=new mongoose.Schema(
    {
        name:{
        type:String,
        trim:true,
        required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
        role:{
            type:String,
            default:'user'
        },
        token:{
            type:String,
            required:true
        }
    }    
)

const User = mongoose.model('User',userSchema);

module.exports={User};