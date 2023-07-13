import React from 'react'
import "./Login.css"
import {Link, useNavigate} from 'react-router-dom';

export default function UserLogin() {
 

  return (
    <div class="container" >
    <div class="wrapper">
    <h2 className='null'>Login</h2>
    
    <div class ="form-box login">
      <form action="a">
        <div class="input-box">
          <span class="icon"></span>
          <input type="email" required/>
          <label>Email</label>
        </div>
        <div class="input-box">

          <span class="icon"></span>
          <input type="password" required/>
          <label>Password</label>
        </div>
        <div class="remember-forgot">
          <label><input type="checkbox"/>Remember me</label>
    
        </div>
        <button type='submit' class="btn" href='/UserHome'>Login
        </button>
        
  
       
        </form>
        </div>
       
        </div>
        </div>
        )
  }
