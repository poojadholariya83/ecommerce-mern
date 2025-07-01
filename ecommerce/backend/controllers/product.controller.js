const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const{Product} = require('../model/Product');
const {User} = require('../model/User')

const product = async(req,res)=>{
    try{
        const products=await Product.find({});
        return res.status(200).json({
            message:"all products",
            products:products
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            messsage:"internal server error"
        }) 
    }
}


const addProduct=async(req,res)=>{
    try{
        let{name,image,brand,stock,price,description} = req.body;
        let{token}=req.headers;
        let decodedToken=jwt.verify(token,"supersecret");
        let user = await User.findOne({email:decodedToken.email});
        const product= await Product.create({
            name,
            price,
            image,
            description,
            stock,
            brand,
            user:user._id
        })
        return res.status(200).json({
            message:"Product created successfully",
            product:product
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            messsage:"internal server error"
        }) 
    }
}


const singleProduct =async(req,res)=>{
    try{
        let{id}=req.params;   
        
         if(!id){
            return res.status(400).json({
                message:"id not found"
            })
        }
        let{token}=req.headers;
        const decodedToken = jwt.verify(token,"supersecret")
        const user = await User.findOne({email:decodedToken.email});

        if(user){
            const product=await Product.findById(id);
        if(!product){
            res.status(400).json({
                message:"prduct not found"
            })
        }
        return res.status(200).json({
            message:"product found successfully",
            product:product
        })}
    }catch(error){
        console.log(error);
        res.status(500).json({
            messsage:"internal server error"
        }) 
    }
    
}
module.exports= {product,addProduct,singleProduct}