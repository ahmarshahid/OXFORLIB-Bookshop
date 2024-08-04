import React from 'react'
import Home from './Home/Home';
/*import Course from './Components/Course';*/
import {Navigate, Route,Routes} from "react-router-dom"
import  { Toaster } from 'react-hot-toast';
import Courses from './courses/Courses';
import Signup from './Components/Signup';
import { useAuth } from './context/AuthProvider';
import Contact from './Contact/Contact';
import About from './About/About';
function App() {
  const [authUser,setAuthUser ] = useAuth()
console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" 
          element={authUser?<Courses />:<Navigate to = "/signup"/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path = "/contact" element ={<Contact/>}/>
          <Route path = "/about" element = {<About/>}/>
        </Routes>
        <Toaster/>
      </div>
    </>
  );
   
}

export default App
