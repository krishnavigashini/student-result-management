import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import AdminLogin from './adminLogin';
import UserLogin from './userLogin';
import UserHome from './UserHome';
import UserContact from './UserContact';
import AdminContact from './AdminContact';
import CheckResult from './CheckResult'
import UserAttendance from './userAttendance'
import UserAssignments from './userAssignments';
import AdminHome from './AdminHome'
import AdminAssignments from './AdminAssignments';
import Result from './Result'
import StudentDB from './studb'
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/userLogin" element={<UserLogin/>}/>
    <Route path="/adminLogin" element={<AdminLogin/>}/>
    <Route path="/userHome" element={<UserHome/>}/>
    <Route path='/CheckResult' element={<CheckResult/>}/>
    <Route path='/UserContact' element={<UserContact/>}/>
    <Route path='/UserAttendance' element={<UserAttendance/>}/>
    <Route path='/UserAssignments' element={<UserAssignments/>}/>
    <Route path='/AdminHome' element={<AdminHome/>}/>
    <Route path='/CreateAssignment' element={<AdminAssignments/>}/>
    <Route path='/AdminContact' element={<AdminContact/>}/>
    <Route path='/ResultManage' element={<Result/>}/>
    <Route path='/StudentDatabase' element={<StudentDB/>}/>
    </Routes>
    </BrowserRouter>
    );
  }
  
  export default App;
