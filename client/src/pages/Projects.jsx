import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
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

  return (
    <div className="min-h-screen bg-blue-900 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-white">All Projects</h2>
          <Link to="/create-project" className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg transition font-medium">
            Create New Project
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {projects.map((project) => (
            <div key={project._id} className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition border border-gray-100">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
              <p className="text-gray-500 mb-4 text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((skill, index) => (
                  <span key={index} className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-400 text-sm">{project.owner?.name || 'Unknown'}</p>
                <Link to={`/match/${project._id}`} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition">
                  Find Matches
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );


}
export default Projects;