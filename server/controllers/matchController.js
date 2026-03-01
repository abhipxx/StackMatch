const User=require('../models/User');
const Project=require('../models/Project');

const getMatches= async(req,res)=>{
    try{
        const project=await Project.findById(req.params.projectId);
        if(!project){
            return res.status(404).json({message:"Project Not found"});
        }
        const users=await User.find({_id:{$ne:project.owner}});
        const scoredUsers=users.map(user=>{
            const matchingSkills=user.skills.filter(skill=>project.skills.includes(skill)).length;
            const skillScore=(matchingSkills/project.skills.length)*60;
            const yoeScore=Math.min(user.yoe*2,20);
            const ratingScore=user.rating*4;

            const totalScore=skillScore+yoeScore+ratingScore;

            return{
                user:{
                    id:user._id,
                    name:user.name,
                    username:user.username,
                    skills:user.skills,
                    yoe:user.yoe,
                    rating:user.rating,
                    github:user.github
                },
                matchScore:Math.round(totalScore)
            };
        });
        scoredUsers.sort((a,b)=>b.matchScore-a.matchScore);
        res.status(200).json(scoredUsers);
    }
    catch(error){
        res.status(500).json({message:"Server error",error:error.message});
    }
};

module.exports={getMatches};