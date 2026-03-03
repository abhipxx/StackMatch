import api from "../services/api";
import {useState} from "react"; 
import { useNavigate } from "react-router-dom"; 
import { useAuth } from "../context/AuthContext";

function Login(){
    const {login}=useAuth();
    const navigate=useNavigate();
    const onregclick=()=>{
        navigate('/register');
    }
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit=async(e)=>{
        e.preventDefault();
        try{
            const response=await api.post('/auth/login',{email,password});
            login(response.data.user,response.data.token);
            navigate('/dashboard');
        }
        catch(error){
            console.log(error);
        }
    }

    return(
        <>
        <h3>Login Page</h3>
        <br/>
        <form onSubmit={handleSubmit}>
        Enter your email:<input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        Enter your password<input type="password" value={password} onChange={(p)=>setPassword(p.target.value)}/> 
        <button type="submit">SUBMIT</button>
        <br />
        <button onClick={onregclick}> Do not have an account?Register </button>
        </form>
        </>
    )
}

export default Login;