import api from "../services/api";
import { useNavigate,Link } from "react-router-dom";
import { useState } from "react";

function Register(){

    const navigate=useNavigate();
    const[name,setName]=useState("");
    const[username,setUsername]=useState("");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");

    const handleSubmit=async (e)=>{
        e.preventDefault();
        try{
            await api.post('/auth/register',{name,username,email,password});
            navigate('/login');
        }
        catch(error){
            console.log(error);
        }
    }

    return(
        <>
        <h3>Registeration form</h3>
        <form onSubmit={handleSubmit}>
            Name:<input type="text" value={name} onChange={((n)=>setName(n.target.value))}></input><br/>
            Username:<input type="text" value={username} onChange={(u)=>setUsername(u.target.value)}></input><br/>
            Email:<input type="email" value={email} onChange={(e)=>setEmail(e.target.value)}></input><br/>
            Password:<input type="password" value={password} onChange={(p)=>setPassword(p.target.value)}></input><br/>
            <button type="submit">SUBMIT</button>
        <Link to="/login">Already have an account?Login</Link>
        </form>
        </>
    )
}

export default Register;