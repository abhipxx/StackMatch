import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function Match(){
    
    const {projectId}=useParams();
    const[matches,setMatches]=useState([]);

    useEffect(()=>{
        const fetchMatches=async()=>{
            try{
                const response=await api.get('/match/'+projectId);
                setMatches(response.data);
            }catch(error){
                console.log(error);
            }
        };fetchMatches()
    },[projectId]);

    return(
        <div>
            <h2>Developer Matches</h2>
            {matches.map((match)=>(
                <div key={match.user.id}>
                    <h3>{match.user.name}</h3>
                    <p>Skills:{match.user.skills.join(',')}</p>
                    <p>Match Score:{match.matchScore}</p>
                </div>
            ))};
        </div>
    );
}

export default Match;