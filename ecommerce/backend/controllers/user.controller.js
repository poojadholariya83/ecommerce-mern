const {User} = require('../model/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const signup = async(req,res)=>{
    try{
        let{name,email,password} = req.body;

        if(!name || !email || !password){
            res.status(400).json({
                messsage:"Some fields are missing"
            })
        }
        const isUserAlreadyExist = await User.findOne({email});
        if(isUserAlreadyExist){
            return res.status(400).json({
                messsage:"user already exist"
            })
        }

        //hash the password
        const salt = bcrypt.genSaltSync(10);
        const passwordHashed = bcrypt.hashSync(password,salt);

        //jwt token
        const token = jwt.sign({email},"supersecret",{expiresIn:'365d'})

        //create user
        await User.create({
            name,
            email,
            password:passwordHashed,
            token,
            role:'user'
        })
        res.status(200).json({
            messsage:"user created successfully"
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            messsage:"internal server error"
        })
    }
}

const login = async(req,res)=>{
    try{
        let {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                messsage:"some fields are mising"
            })
        }
        //user exists or not
        let user = await User.findOne({email});
        if(!user){
            res.status(400).json({
                messsage:"user not register"
            })
        }

        //compare password
        const isPasswordMatched = bcrypt.compareSync(password,user.password);
        if(!isPasswordMatched){
            res.status(400).json({
                messsage:"password wrong"
            })
        }

        res.status(200).json({
            id:user._id,
            name:user.name,
            token:user.token,
            email:user.email,
            role:user.role
        })
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            messsage:"internal server error"
        }) 
    }
}

module.exports = {signup,login};
