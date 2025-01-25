import React from "react";
import Project from "./Project";
import Profile from "./Profile";

const Home = () => {
    const AboutMe = "certificates/asset/person.png"
    const ProjectIm = "certificates/asset/project-management.png"
    const Certificate = "certificates/asset/diploma.png"

    return (
        <div className=" h-screen md:w-full md:pt-[18%] animate-fadeIn pt-10 px-4 md:px-10 xl:px-5 scroll-container scroll-hidde">
            <div className="md:w-full  shadow-custom  rounded-md  text-gray-400">
            <div className="flex flex-col items-center justify-center px-4 bg-none rounded-md text-center mt-10 py-20 border border-gray-700">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-400 ">Hi!</h1>
                <p className="mt-4 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl 2xl:text-2xl max-w-4xl text-gray-300">
                    I am Victor, a passionate software engineer with a love for crafting efficient, user-friendly, and scalable solutions. Explore my projects to see how I turn complex ideas into elegant code. From sleek user interfaces to robust backend systems, my work showcases a commitment to clean design and cutting-edge technologies. Let's build something amazing together!
                </p>
            </div>

            </div>
             
             <div className="hidden 2xl:flex justify-between h-[50%]  mt-20 pb-10   ">
               
                <div className="h-full border-2 bg-slate-900  border-gray-600 rounded-md w-[30%] py-4 shadow-custom text-center font-bold transition-transform duration-500 ease-in-out transform hover:scale-105">
                <a href="/about">
                    <div className="h-[60%]   bg-slate-700">
                        <img
                            src={AboutMe}
                            alt="About icon"
                            className="w-[80%] pl-[25%] h-full object-cover "
                        />
                    </div>
                  <h2 className="pt-10 text-xl text-gray-300">About me.</h2>
                  <p className="text-gray-400 px-1">Here for more detailed information about me.</p>
                  </a>
                </div>
                
                <div className="h-full border-2 bg-slate-900  border-gray-600 rounded-md w-[30%] py-4 shadow-custom text-center font-bold transition-transform duration-500 ease-in-out transform hover:scale-105">
                <a href="/project">
                <div className="h-[60%] mx-auto flex items-center justify-center relative bg-slate-700">
    <img
        src={ProjectIm}
        alt="Project icon"
        className="p-20 object-cover"
    />
</div>

                  <h2 className="pt-10 text-xl text-gray-300">Explore my projects</h2>
                  <p className="text-gray-400">Discover my projects and their impact.</p>
                  </a>
                </div>

                <div className="h-full border-2 bg-slate-900  border-gray-600 rounded-md w-[30%] py-4 shadow-custom text-center font-bold transition-transform duration-500 ease-in-out transform hover:scale-105">
                <a href="/blog">
                    <div className="h-[60%]  bg-slate-700">
                    <video
                        src="/assets/Developer Coding Background.mp4" // Path relative to the public folder
                        alt="Video"
                        autoPlay
                        loop
                        className="w-full h-full object-cover"
                    >
                        Your browser does not support the video tag.
                    </video>
                    </div>
                  <h2 className="pt-10 text-xl text-gray-300">Explore my code blog</h2>
                  <p className="text-gray-400 px-1">Explore my code blog and learn from my experiences.</p>
                  </a>
                </div>

             </div>


            <div className="md:hidden">
                <Profile />
            </div>
            <div className=" 2xl:hidden">
                <Project />
            </div>
        </div>
    );
};

export default Home;
