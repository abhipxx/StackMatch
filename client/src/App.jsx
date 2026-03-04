import { Routes,Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Create_project from "./pages/Create-project";
import Match from "./pages/Match";

function App(){
    return(
        <>
        <Navbar />
       <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/create-project" element={<Create_project/>}></Route>
        <Route path="/match/:projectId" element={<Match/>}></Route>
       </Routes>
       </>
    )
}

export default App;