import React from "react";



const About = () => {
    const aboutImage = "assets/myphoto.jpg"
    return ( 
        <div className="animate-fadeIn  w-full h-screen 2xl:flex pt-[20%] lg:pt-[10%]  md:block   scroll-container scroll-hidde ">

            <div className="h-[50%] shadow-custom p-2 w md:w-[90%] xl:w-[90%] 2xl:w-[40%] lg:h-[30%] xl:h-[40%] md:h-[40%] mb-8 md:mb-[7%] ml-[4%] lg:mt-[6%]">
            <img
                src={aboutImage}
                    alt="Full Image"
                    className="w-full h-full object-cover rounded-2xl"
            />
            </div>

            <div className="border  2xl:border-none border-gray-700 text-gray-400 text-[18px] lg:pt-[10%] p-4 mx-2 rounded-md 2xl:w-[70%]  pb-10 text-left mb-4 scroll-container scroll-hidde">
                <h2 className="mb-2 font-bold ">About Me</h2>
               
               <div className="bg-red-900 rounded-md py-2 px-1 mb-4 bg-opacity-60">
                <p>
                Hello! I'm Victor, a software engineer based in Lagos Nigeria. My journey started in Mechanical Engineering, where I honed my problem-solving skills and developed an analytical approach to tackling challenges. However, my passion for technology and innovation led me to pivot into software development. Today, I specialize in C++, the MERN stack (MongoDB, Express.js, React, Node.js), Qt/QML building robust, scalable applications across a variety of platforms.
                </p>
               </div>

               <div className="bg-red-700 rounded-md py-2 px-1 mb-4 bg-opacity-60">
                <p>
                As a C++ developer, I’m drawn to its efficiency and power, using it to create performance-critical software. My experience with Qt/QML allows me to develop cross-platform user interfaces with rich, interactive designs, combining functionality with aesthetics. In web development, the MERN stack lets me build dynamic, full-stack applications, while Git ensures seamless version control and collaboration on all my projects.
                </p>
               </div>

               <div className="bg-red-900 rounded-md py-2 px-1 mb-4 bg-opacity-60">
                <p>
                Outside of coding, I enjoy learning new technologies, collaborating on open-source projects, and continuously pushing myself to grow as a developer. I'm committed to building quality software that makes a difference, and I believe that through perseverance and curiosity, anything can be achieved.
                </p>
                <p className="font-bold my-2 py-1 bg-green-800 rounded-md pl-2 text-gray-300">
                 Let’s connect and create something amazing!
               </p>
               </div>
              
               <div className="bg-red-900 rounded-md py-2 px-1 mb-4 bg-opacity-60">
               <p>
                Quote: <br/>
                When you have a dream, you've got to grab it and never let go. there is nothing impossible to who gives it a try.
                The bad news is time flies, but the good news is you're the pilot.
               </p>
               <p className="font-bold my-2 py-1 bg-green-800 rounded-md pl-2 text-gray-300">
                Carol Burnett, Alexander the Great, and Michael Altshuler.
               </p>
               </div>

            </div>

        </div>
     );
}
 
export default About;