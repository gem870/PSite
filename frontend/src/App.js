import React from "react";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Certificate from "./components/MiniCertificate";
import MessageIcone from "./components/MessageIcon";
import Socials from "./components/Socials";
import BlogList from "./components/BlogList";
import MainCertificate from "./components/MainCertificate"
import About from "./components/About";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import MyProjects from "./components/MyProjects"
import BlockDetails from "./components/BlogDetails"





function App() {
  return (
    <div className="text-white h-full w-full ">
    <BrowserRouter>
    <Navbar/>


  <div className="   ">
 
  <div className=" scroll-hidde overflow-hidden  mx-auto right-0 lg:mr-[21%] md:w-[60%]  w-[90%] lg:w-[53%] lg:ml-[25.5%] md:absolute ">
  <Routes>
    <Route
    path="/"
    element={<Home/>}
    />

    <Route
    path="/blog"
    element={<BlogList/>}
    />

  
    <Route
    path="/about"
    element={<About/>}
    />

   <Route
    path="/project"
    element={<MyProjects/>}
    />


</Routes>
  </div>

  <div className="hidden md:block">
  <Profile/>
  </div>

  <Routes>
  <Route
    path="/certificate"
    element={<MainCertificate/>}
    />

  <Route
    path="/blog/:id"
    element={<BlockDetails/>}
    />
  </Routes>

  
  <Certificate/>
  <MessageIcone/>
  <Socials/>
</div>

    </BrowserRouter>
    </div>
  );
}

export default App;
