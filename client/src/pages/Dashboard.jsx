import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Dashboard(){
    const navigate=useNavigate();
    
    const {user,logout}=useAuth();
    const handleLogout= ()=>{
        try{
            logout();
            navigate('/login');
        }
        catch(error){
            console.log(error);
        }
    }

    return(
        <div className="min-h-screen bg-blue-900 p-8">
            <div className="max-w-4xl mx-auto">
            <h1 className="text-white font-bold mb-2 text-3xl">Welcome, <span className="text-white">{user.name}</span></h1>
            <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadown-lg hover:bg-slate-200 transition cursor-pointer py-20 "  onClick={() => navigate('/projects')}>
                    <h2 className="text-xl font-bold mb-2 text-gray-800">Browse Projects</h2>
                     <p className="text-slate-900 mb-8">Find projects to collaborate on</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadown-lg hover:bg-slate-200 transition cursor-pointer py-20" onClick={() => navigate('/create-project')}>
                    <h2 className="text-xl font-bold mb-2 text-gray-800">Create Projects</h2>
                     <p className="text-slate-900 mb-8">Post a new project</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md hover:shadown-lg hover:bg-slate-200 transition cursor-pointer py-20" onClick={() => navigate('/ai-assistant')}>
                    <h2 className="text-xl font-bold mb-2 text-gray-800">AI Assistant</h2>
                     <p className="text-slate-900 mb-8">Get AI powered project suggestions</p>
                </div>
            </div>
            <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition">Logout</button>
        </div>
        </div>
    );
}

export default Dashboard;