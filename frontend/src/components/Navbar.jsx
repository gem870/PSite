import React from "react";
import MenuIcon from './assets/hamburger.png'
import closeIcon from './assets/cross-mark.png'
import  { useState, useEffect, useRef } from 'react';
import Logo from './assets/Untitled design.png'
import Logo2 from './assets/Emmanuel victor.png'
import workStation from './assets/work station.jpg'
import { ReactTyped } from "react-typed";
import{Link} from "react-router-dom"




const Navbar = () => {
    const [nav, setNav] = useState(true)
    const [midNav, setMidNav] = useState(true)
    const dropdownRef = useRef(null);

    const midMenu =()=>{
        setMidNav(!midNav)
    }

    const onMidClose = ()=>{
        setTimeout(() => {
            setMidNav(!midNav)
        }, 400);
    }

    const handleMenu =()=>{
        setNav(!nav)
    }

    const onNavClose = ()=>{
        setTimeout(() => {
            setNav(!nav)
        }, 400);
    }

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target )) {
            setTimeout(() => {
            setMidNav(true); // Close dropdown
            setNav(true); // Close dropdown
            }, 200);
        }
      };

      useEffect(() => {
        // Attach event listener when component mounts
        document.addEventListener('mousedown', handleClickOutside);
        
        // Clean up event listener when component unmounts
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, []);


    return ( 
       <div className="w-[100%]   z-20 fixed"  ref={dropdownRef}>
           <div className=" shadow-custom  flex bg-[#000000] pb-1 md:mx-5 lg:mx-20">
            <div className="bg-[#173a21] h-[40px] w-[40px] md:h-[80px] md:w-[80px] border-2 md:border-4 border-[#04b8b2]  rounded-full ml-5 md:ml-[12%]">
                    <img
                        src={Logo}
                            alt="Full Image"
                            className="w-full h-full object-cover  rounded-full"
                    />
            </div>

           
            <div className="text-white hidden md:flex">
                
             <h1 className="text-[#04b8b2] font-bold text-2xl ml-2 md:mt-10">Emmanuel Victor</h1>
                <ReactTyped
                  strings={['Welcome to my portfolio!', 'I am a software engineer,', 'Humble/willing', 'And Passionate.']}
                  typeSpeed={200}
                  backSpeed={30}
                  loop
                  className="text-[#d8a250] font-bold text-1xl ml-2 mt-12"
                />
            </div>

            <div className=" hidden h-[40px] w-[40px] mr-[10%] mt-6 right-0 mx-auto items-center  md:flex" onClick={midMenu}>
                {!midNav ? <img src={closeIcon} alt="" className="w-7 mx-auto animate-fadeIn "/> : <img src={MenuIcon} alt="" className="w-5 mx-auto animate-fadeIn "/>}
            </div>
            
            <div className=" h-[40px] w-[40px] mr-[-0px] right-0 mx-auto items-center flex md:hidden" onClick={handleMenu}>
                {!nav ? <img src={closeIcon} alt="" className="w-7 mx-auto animate-fadeIn "/> : <img src={MenuIcon} alt="" className="w-5 mx-auto animate-fadeIn "/>}
            </div>
            
        </div>

        
             {/* ----------- big screens menu section ----------- */}
             <div className={!midNav ? "  hidden md:flex z-10 w-[60%] md:w-[80%] ml-[11%] mt-2 rounded-sm" : "right-[-100%] ease-linear  fixed"}>
                 <div className="flex items-center justify-center w-[60%] md:w-[80%] h-[185px] bg-cover bg-center  absolute z-[-20] bg-black">
                      <img
                           src={workStation}
                          alt="Full Image"
                          className="w-full h-full object-cover  opacity-60"
                      />
                  </div>
        
            <div className={!midNav ? " py-3 bg-[#080808] bg-opacity-70  animate-fadeIn   duration-500 md:flex  w-[70%] " : "right-[-100%] ease-linear  fixed"}>
            
                <ul className="border z-[10] border-gray-600 rounded-md w-[70%] ml-[10%] ">
                    <Link to="/"><li className="pl-4 p-1 hover:shadow-custom transition-shadow duration-1000 text-gray-400 hover:text-[#fa2d5d] font-sans" onClick={onMidClose}>Home</li></Link>
                    <Link to="/about"><li className="pl-4 p-1 hover:shadow-custom transition-shadow duration-1000 text-gray-400 hover:text-[#fa2d5d] font-sans" onClick={onMidClose}>About</li></Link>
                    <Link to="/project"><li className="pl-4 p-1 hover:shadow-custom transition-shadow duration-1000 text-gray-400 hover:text-[#fa2d5d] font-sans" onClick={onMidClose}>projects</li></Link>
                    <Link to="/certificate"><li className="pl-4 p-1 hover:shadow-custom transition-shadow duration-1000 text-gray-400 hover:text-[#fa2d5d] font-sans" onClick={onMidClose}>Certificates</li></Link>
                    <Link to="/blog"><li className="pl-4 p-1 hover:shadow-custom transition-shadow duration-1000 text-gray-400 hover:text-[#fa2d5d] font-sans" onClick={onMidClose}>Blog</li></Link>
                </ul>
            </div>

            <div className={!midNav ? " w-[30%]  items-center bg-[#080808] bg-opacity-70 md:flex hidden" : "right-[-100%] ease-linear  fixed"}>
            <div className="bg-[#173a21] h-[100px] w-[100px] border-4 border-[#04b8b2]  rounded-full ml-5 mt-1 ">
                <img
                            src={Logo2}
                                alt="Full Image"
                                className="w-full h-full object-cover  rounded-full mx-auto"
                        />
                </div>
            </div>
            </div>
      
              
      



             {/* ----------- Android menu section ----------- */}
        <div className={!nav ? " flex ease-linear  duration-500 md:hidden mt-1 z-10" : "right-[-100%] ease-linear  fixed"} >
                 <div className="flex items-center justify-center w-full h-[183px] bg-cover bg-center  absolute z-[-10] bg-black">
                      <img
                           src={workStation}
                          alt="Full Image"
                          className="w-full h-full object-cover  opacity-60"
                      />
                  </div>
        
            <div className={!nav ? " py-3 bg-[#080808] bg-opacity-70  ease-linear  duration-500 md:hidden w-[70%] z-10 " : "right-[-100%] ease-linear  fixed"}>
            
                <ul>
                <Link to="/"><li className="pl-4 p-1 hover:shadow-custom transition-shadow duration-1000 text-gray-400 hover:text-[#fa2d5d] font-sans" onClick={onNavClose}>Home</li></Link>
                    <Link to="/about"><li className="pl-4 p-1 hover:shadow-custom transition-shadow duration-1000 text-gray-400 hover:text-[#fa2d5d] font-sans" onClick={onNavClose}>About</li></Link>
                    <Link to="/project"><li className="pl-4 p-1 hover:shadow-custom transition-shadow duration-1000 text-gray-400 hover:text-[#fa2d5d] font-sans" onClick={onNavClose}>projects</li></Link>
                    <Link to="certificate"><li className="pl-4 p-1 hover:shadow-custom transition-shadow duration-1000 text-gray-400 hover:text-[#fa2d5d] font-sans" onClick={onNavClose}>Certificates</li></Link>
                    <Link to="/blog"><li className="pl-4 p-1 hover:shadow-custom transition-shadow duration-1000 text-gray-400 hover:text-[#fa2d5d] font-sans" onClick={onNavClose}>Blog</li></Link>
                </ul>
            </div>

            <div className={!nav ? " w-[30%] flex items-center bg-[#080808] bg-opacity-70 md:hidden" : "right-[-100%] ease-linear  fixed"}>
            <div className="bg-[#173a21] h-[80px] w-[80px] border-2 border-[#04b8b2]  rounded-full ml-5 mt-1">
                <img
                            src={Logo2}
                                alt="Full Image"
                                className="w-full h-full object-cover  rounded-full mx-auto"
                        />
                </div>
            </div>
        </div>



       </div>
     );
}
 
export default Navbar;