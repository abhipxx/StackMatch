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
        <nav>
            <Link to='/dashboard'>StackMatch</Link>
            <br/>
            {user?(
                <>
                <Link to="/projects">Browse Projects</Link><br/>
                <button onClick={handleLogout}>Logout</button><br/>
                </>
            ):(
                <>
                <Link to="/login">Login</Link><br/>
                <Link to='/register'>Register</Link>
                </>
            )}
        </nav>

    );
}

export default Navbar;