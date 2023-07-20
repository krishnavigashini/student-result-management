import React from 'react'
import './AdminAssignments.css';
import Navbar from './NavBar1';

export default function AdminAssignments() {
  return (
    <div className='container-ass1'>
    <span><Navbar/></span>
    <div class="wrapper-ass1">
    <h2 className='null-ass1'>Assignments</h2>
    <div class ="form-box-ass1 login">
      <form action="a">
      <div class="input-box-ass1">
        <span class="icon-ass1"></span>
        <input type="text" required/>
        <label>Name</label>
      </div>
        <div class="input-box-ass1">
          <span class="icon-ass1"></span>
          <input type="email" required/>
          <label>Email</label>
        </div>
        <label>Assignment</label>
        <div class="ass1">
        <span class="icon-ass1"></span>
        <br></br>
        <textarea/>
      </div><br></br>
        <button type="submit" class="btn-ass1">Submit</button>
        </form>
        </div>
        </div>
        </div>
    )
  }
