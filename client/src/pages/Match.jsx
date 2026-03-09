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

    const getScoreColor = (score) => {
        if (score >= 70) return 'bg-green-100 text-green-600';
        if (score >= 40) return 'bg-yellow-100 text-yellow-600';
        return 'bg-red-100 text-red-600';
    };

  return (
    <div className="min-h-screen bg-blue-900 p-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-8">Developer Matches</h2>
        {matches.length === 0 ? (
          <p className="text-gray-500">No matches found for this project.</p>
        ) : (
          <div className="grid grid-cols-2 gap-6">
            {matches.map((match) => (
              <div key={match.user.id} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-800">{match.user.name}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-bold ${getScoreColor(match.matchScore)}`}>
                    {match.matchScore}% Match
                  </span>
                </div>
                <p className="text-gray-400 text-sm mb-3">@{match.user.username}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {match.user.skills.map((skill, index) => (
                    <span key={index} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>⭐{match.user.rating} Rating</span>
                  <span>💼{match.user.yoe} YOE</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Match;