import logo from './logo.svg';
import './App.css';
import Assessment from './Assessment';
import TeacherPortal from './TeacherPortal'
import NewStudentForm from './component/NewStudentForm';
import { useState } from 'react';
import Form from './component/Form';

// function App() {
//   const [count, setCount] = useState(0)
//   return (
//     <div className="App">
//   <TeacherPortal/>

//   <NewStudentForm/>
//     </div>
//   );
// }

// export default App;

import React from 'react';
// import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from './component/About';
import Service from './component/Service';
import Contact from './component/Contact';

// function Home() {
//   return (
//     <div>
//       <h1>Home</h1>
//     </div>
//   );
// }

function App() {
  return (
  
        <div className="main">
          <div className="navbar">
            <div className="icon">
              <h2 className="logo">[ Urmi ]</h2>
            </div>
            <div className="menu">
              
              <ul>
                <li>
                  <Link to="/">HOME</Link>
                </li>
                <li>
                  <Link to="/about">ABOUT</Link>
                </li>
                <li>
                  <Link to="/service">SERVICE</Link>
                </li>
                <li>
                  <Link to="/contact">CONTACT</Link>
                  
                </li>
              </ul>
            </div>
            <div className="search">
              <input
                className="srch"
                type="search"
                name=""
                placeholder="Type To text"
              />
              <a href="#">
                <button className="btn">Search</button>
              </a>
            </div>
          </div>
          <div className="content">
            <h1>
              The Urmi Foundation,
              <br />
              <span> India</span> <br />
            </h1>
            <p className="par">
              The Urmi Foundation works to provide a better education and future
              to
              <br />
              children with developmental disabilities in the slums of Mumbai.
              <br />
            </p>
            <button className="cn">
              <a href="#">JOIN US</a>
            </button>
            <div className="form">
              <h2>Login Here</h2>
              <input
                type="email"
                name="email"
                placeholder="Enter Email Here"
              />
              <input
                type="password"
                name=""
                placeholder="Enter Password Here"
              />
              <button className="btnn">
                {/* <a href="#">Login</a> */}
                <Link to="/login">Login</Link>
              </button>
              <p className="link">
                Don't have an account
                <br />
                <a href="#">Sign up</a> here
              </p>
              <p className="liw">Log in with</p>
              <div className="icons">
                <a href="https://www.facebook.com/">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/facebook-new.png"
                    alt="facebook-new"
                  />
                </a>
                <a href="https://www.instagram.com/">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/fluency/48/instagram-new.png"
                    alt="instagram-new"
                  />
                </a>
                <a href="https://twitter.com/home">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/twitter--v1.png"
                    alt="twitter--v1"
                  />
                </a>
                <a href="https://accounts.google.com/v3/signin/identifier?dsh=S-1291208006%3A1688835182828929&authuser=0&continue=https%3A%2F%2Fwww.google.com%2Fsearch%3Fq%3Dgoogle%2Blogin%26oq%3Dgoogle%2Blogin%26aqs%3Dchrome..69i57j0i433i512j0i20i263i512j0i512l2j69i60l3.2790j0j7%26sourceid%3Dchrome%26ie%3DUTF-8&ec=GAlAAQ&hl=en&flowName=GlifWebSignIn&flowEntry=AddSession">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/google-logo.png"
                    alt="google-logo"
                  />
                </a>
                <a href="https://github.com/">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/fluency/48/github.png"
                    alt="github"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
     
  );
}

export default App;
