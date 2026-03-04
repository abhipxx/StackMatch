import { useState,useEffect } from "react";
import api from "../services/api";



function Projects(){
    const [projects,setProjects]= useState([]);

    useEffect(()=>{
        const fetchProjects=async()=>{
            try{
                const response=await api.get('/projects');
                setProjects(response.data);
            }
            catch(error){
                console.log(error);
            }
        };
        fetchProjects();
    },[]);

    return(
        <div>
            <h2>All projects</h2>
            {projects.map((project)=>(
                <div key={project._id}>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <p>Skills:{project.skills.join(',')}</p>
                    <p>Owner:{project.owner.name}</p>
                </div>
            ))}
        </div>
    );



}
export default Projects;