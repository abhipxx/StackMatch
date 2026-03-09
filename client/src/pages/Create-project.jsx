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
    
  return (
    <div className="min-h-screen bg-blue-900 flex items-center justify-center p-8">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-lg">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Create Project</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-medium">Title</label>
            <input type="text" value={title} onChange={(t) => setTitle(t.target.value)} className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Project title"/>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-medium">Description</label>
            <textarea
              value={description}
              onChange={(d) => setDescription(d.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Describe your project"
              rows={3}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-medium">Skills</label>
            <input
              type="text"
              value={skills}
              onChange={(s) => setSkills(s.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="React, Node, MongoDB (comma separated)"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1 font-medium">GitHub</label>
            <input
              type="text"
              value={github}
              onChange={(g) => setGithub(g.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="GitHub repository link"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-1 font-medium">Members Needed</label>
            <input
              type="number"
              value={membersNeeded}
              onChange={(m) => setMembersNeeded(m.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-blue-500"
              placeholder="Number of members needed"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg font-medium transition">
            Create Project
          </button>
        </form>
      </div>
    </div>
  );
}

export default Create_project;