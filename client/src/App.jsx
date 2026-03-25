import { Routes,Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Create_project from "./pages/Create-project";
import Match from "./pages/Match";
import ProtectedRoute from "./components/ProtectedRoute";
import AIAssistant from "./pages/AIAssistant";
import Home from "./pages/Home"

function App(){
    return(
        <>
        <Navbar />
       <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>}></Route>
        <Route path="/projects" element={<ProtectedRoute><Projects/></ProtectedRoute>}></Route>
        <Route path="/create-project" element={<ProtectedRoute><Create_project/></ProtectedRoute>}></Route>
        <Route path="/match/:projectId" element={<ProtectedRoute><Match/></ProtectedRoute>}></Route>
        <Route path="/ai-assistant" element={<ProtectedRoute><AIAssistant /></ProtectedRoute>}></Route>
        <Route path="/" element={<Home />}></Route>
       </Routes>
       </>
    )
}

export default App;