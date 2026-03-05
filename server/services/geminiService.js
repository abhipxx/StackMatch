const {GoogleGenerativeAI}=require('@google/generative-ai');

const genAI=new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const getProjectSuggestion=async(projectDescription)=>{
    const model =genAI.getGenerativeModel({model:'gemini-2.5-flash'});

    const prompt=`A developer wants to build the followin project:"${projectDescription}}"
    
    Please suggest:
    1. Best tech stack for this project
    2. Ideal team composition (roles and skills needed)
    3. Rough timeline for completion
    4. 3 key features to focus on first
    
    Keep the response concise and practical.

    `;

    const result=await model.generateContent(prompt);
    const response=await result.response;
    return response.text();
};

module.exports={getProjectSuggestion};
