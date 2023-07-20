import React from 'react'
import './Login.css';

export default function AdminLogin() {
  return (
    <div className='container-1'>
    <div class="wrapper">
    <h2 className='null'>Login</h2>
    <div class ="form-box login">
      <form action="/AdminHome">
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
        <button type="submit" class="btn" href='/AdminLogin'>Login</button>
        </form>
        </div>
        </div>
        </div>
    )
  }
