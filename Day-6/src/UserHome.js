import './App.css';
import NavBar from './NavBar'
import SideBar from './SideBar';
import userLoginbg from '../src/images/userLoginbg.jpg'

function UserHome() {
  return (
    <div className='pic'>
    <div>
    <img src={userLoginbg} width={1520} height={720}/>
    <NavBar />
    <SideBar/>
    </div>
    </div>
     );
  }
  
  export default UserHome;
