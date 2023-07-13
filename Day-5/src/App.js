import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import AdminLogin from './adminLogin';
import UserLogin from './userLogin';
import UserHome from './UserHome';
import CheckResult from './CheckResult'
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/userLogin" element={<UserLogin/>}/>
    <Route path="/adminLogin" element={<AdminLogin/>}/>
    <Route path="/userHome" element={<UserHome/>}/>
    <Route path='/CheckResult' element={<CheckResult/>}/>
    </Routes>
    </BrowserRouter>
    );
  }
  
  export default App;
