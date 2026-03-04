import api from "../services/api";
import {useState} from "react";
import {useNavigate} from "react-router-dom"

function Create_project(){

    const navigate=useNavigate();

    const [title,setTitle]=useState("");
    const [description,setDescription]=useState("");
    const[skills,setSkills]=useState("");
    const[github,setGithub]=useState("");
    const [membersNeeded,setMembersNeeded]=useState(0);

    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
            await api.post('/projects',{
                title,
                description,
                skills:skills.split(',').map(s=>s.trim()),
                github,
                membersNeeded
            });
            navigate('/projects');
        }catch(error){
            console.log(error);
        }
    }
    
    return(
        <form onSubmit={handleSubmit}>
            Title:<input type="text" value={title} onChange={(t)=>setTitle(t.target.value)}></input><br/>
            Description:<input type="text" value={description} onChange={(d)=>setDescription(d.target.value)}></input><br/>
            Skills:<input type="text" value={skills} onChange={(s)=>setSkills(s.target.value)}></input><br/>
            Github:<input type="text" value={github} onChange={(g)=>{setGithub(g.target.value)}}></input><br/>
            Members Needed:<input type="text" value={membersNeeded} onChange={(m)=>{setMembersNeeded(m.target.value)}}></input><br/>
            <button type="submit">SUBMIT</button>
        </form>
    )
}

export default Create_project;