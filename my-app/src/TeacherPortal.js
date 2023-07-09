import React from 'react';
import './TeacherPortal.css';
import { Link } from 'react-router-dom';

function TeacherPortal() {
  return (
    <div className="app">
    <div className="card dashboard">
      <h2><Link to="/dashboard">Dashboard</Link></h2>
    </div>
    <div className="card add-registration">
      <h2><Link to="/registration">Add New Registration</Link>
        </h2>
    </div>
    <div className="card assessment">
      <h2><Link to="/assessment">Assessment</Link>
        </h2>
    </div>
  </div>


  )
}

export default TeacherPortal