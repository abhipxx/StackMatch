import { Routes,Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";

function App(){
    return(
        <>
        <Navbar />
       <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/dashboard" element={<Dashboard/>}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
       </Routes>
       </>
    )
}

export default App;