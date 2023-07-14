import React from 'react'
import user from './images/user.png'
import admin from './images/admin.png'
import "./Main.css"
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <div className='body'>
    <div className='title'><h1>STUDENT RESULT MANAGEMENT</h1></div>
    <div className='div-user'>
    <Link to="/userLogin" className='link-user-login'>
    <img src={user} alt='user'/>
    <h3>USER</h3>
    </Link>
    </div>
    <div className='div-admin'>
    <Link to="/adminLogin" className='link-admin-login'>
    <img src={admin} alt='admin' width={240} height={240}/>
    <h3>ADMIN</h3>
    </Link>

    </div>
    </div>
    )
  }

