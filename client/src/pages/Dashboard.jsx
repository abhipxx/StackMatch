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
        <>
        <h3>Welcome {user.name}</h3>
        <button onClick={() => navigate('/projects')}>Browse Projects</button>
        <button onClick={() => navigate('/create-project')}>Create Project</button>
        <button onClick={handleLogout}>Logout</button>
        </>
    );
}

export default Dashboard;