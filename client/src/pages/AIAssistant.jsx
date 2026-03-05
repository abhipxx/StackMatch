import {useState} from "react";
import api from "../services/api"

function AIAssistant(){

    const [description,setDescription]=useState("");
    const [suggestion,setSuggestion]=useState("");

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response=await api.post('/ai/suggest',{description});
            setSuggestion(response.data.suggestion);
        }catch(error){
            console.log(error);
        }

    }

    return(
        <div>
            <h2>AI Project Assistant</h2>
            <textarea  value={description} onChange={(d)=>setDescription(d.target.value)} placeholder="Describe your project idea"/>
            <button onClick={handleSubmit}>Get Suggestions</button>
            {suggestion &&<pre>{suggestion}</pre>}
        </div>
    );
}

export default AIAssistant;