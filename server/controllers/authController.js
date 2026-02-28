const User=require('../models/User');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

//Register function
const register=async(req,res)=>{
    try{
        const {name,username,email,password}=req.body;
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message:"User already exists"});
        }
        const salt=await bcrypt.genSalt(10);
        const hashedPassword=await bcrypt.hash(password,salt);
        const user=new User({
            name,
            username,
            email,
            password:hashedPassword
        });
        await user.save();
        res.status(201).json({message:"User registered successfully"});
    }catch(error){
        res.status(500).json({message:'Server error',error:error.message})
    }
};

//Login Function
const login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"Invalid Credentials"});
        }
        const isMatch=await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json({message:"Invalid Credentials"});
        }
        //After succcessful login the token to be sent
        const token=jwt.sign(
            {userId:user._id},
            process.env.JWT_SECRET,
            {expiresIn:'7d'}
        );

        res.status(200).json({
            token,
            user:{
                id:user._id,
                name:user.name,
                username:user.username,
                email:user.email
            }
        });
    }
    catch(error){
        res.status(500).json({message:'Server Error',error:error.message});
    }
};



module.exports={register,login};