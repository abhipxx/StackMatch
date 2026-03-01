const Project=require('../models/Project');

const createProject=async (req,res)=>{
    try{
        const {title,description,skills,github,membersNeeded}=req.body;
        const project=new Project({
            title,
            description,
            skills,
            github,
            membersNeeded,
            owner:req.userId
        });
        await project.save();
        res.status(201).json({message:"Project created successfully"});
    }
    catch(error){
        res.status(500).json({message:"Server error",error:error.message});
    }
};

const getProjects=async (req,res)=>{
    try{
        const projects=await Project.find().populate('owner','name username skills').sort({createdAt:-1});
        res.status(200).json(projects);
    }
    catch(error){
        res.status(500).json({message:"Server error",error:error.message});
    }
};

module.exports={createProject,getProjects};