import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Contact from './component/About';
import Service from './component/Service';
import About from './component/About';
import reportWebVitals from './reportWebVitals';
import ProfilePage from './Student Dashboard/ProfilePage'
import {
  createHashRouter,
  RouterProvider,
  // Route,
  Route,
  HashRouter as Router
} from "react-router-dom";
import NewStudentForm from './component/NewStudentForm';
import TeacherPortal from './TeacherPortal';
import Form from './component/Form';
const router = createHashRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/service",
    element: <Service/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/registration",
    element: <NewStudentForm/>,
  },
  {
    path: "/dashboard",
    element: <ProfilePage/>,
  },
  {
    path: "/assessment",
    element: <Form/>,
  },
  {
    path:"/login",
    element:<TeacherPortal/>
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router}  />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
