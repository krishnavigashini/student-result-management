import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import AdminLogin from './adminLogin';
import UserLogin from './userLogin';
import UserDash from './userDash'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/userDashboard" element={<UserDash/>}/>
    <Route path="/" element={<Home/>}/>
    <Route path="/userLogin" element={<UserLogin/>}/>
    <Route path="/adminLogin" element={<AdminLogin/>}/>
    <Route path="/userDashboard" element={<UserDash/>}/>
    </Routes>
    </BrowserRouter>
    );
  }
  
  export default App;
