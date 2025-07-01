//first letter of file in model folder's schema file must be capital

const mongoose=require('mongoose');

//creating user schema for signup form
const userSchema=new mongoose.Schema(
    {
        name:{
            type:String,
            trim:true,
            require:true
        },
        email:{
            type:String,
            trim:true,
            require:true
            //unique:true
        },
        password:{
            type:String,
            trim:true,
            require:true,
            minlength:6
        },
        role:{  //like in eommerce seller or buyer
            type:String,
            default:'user'
        },
        token:{
            type:String,
            required:true
        }
    }
)
//savings userSchema in User file
const User=mongoose.model('User',userSchema)
module.exports={User};