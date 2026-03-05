const {getProjectSuggestion}=require('../services/geminiService');

const getAISuggestion=async (req,res)=>{
    try{
        const {description}=req.body;
        if(!description){
            return res.status(400).json({message:"Description is required"});
        }
        const response= await getProjectSuggestion(description);
        res.status(200).json({suggestion:response});
    }
    catch(error){
        res.status(500).json({message:"Server error",error:error.message});
    }
}

module.exports={getAISuggestion};