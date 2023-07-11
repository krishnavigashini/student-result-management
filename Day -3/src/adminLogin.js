import React from 'react'
import './adminLogin.css';

export default function AdminLogin() {
  return (
    <div className='container'>
    // <div class="wrapper">
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
        
        </form>
        </div>
        </div>
        </div>
    )
  }
