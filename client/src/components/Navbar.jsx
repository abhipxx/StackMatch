import { useNavigate,Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar(){
    
    const navigate=useNavigate();
    const { user,logout }=useAuth();

    const handleLogout=()=>{
        logout();
        navigate('/login');
    }
    return(
        <nav className="bg-gray-900 text-white px-6 py-4 flex items-center justify-between">
            <Link to='/dashboard'>StackMatch</Link>
            <br/>
            <div className="flex items-center gap-6">
            {user?(
                <>
                <Link to="/projects" className="text-violet-200 hover:text-blue-400 transition">Browse Projects</Link>
                <Link to="/ai-assistant" className="hover:text-blue-400 transition">AI-Assistant</Link>
                <button onClick={handleLogout} className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg transition">Logout</button>
                </>
            ):(
                <>
                <Link to="/login" className="hover:text-blue-400 transition">Login</Link><br/>
                <Link to="/register" className="bg-red-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition">Register</Link>
                </>
            )}
            </div>
        </nav>

    );
}

export default Navbar;