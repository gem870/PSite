import Logo2 from './assets/Emmanuel victor.png'
import { ReactTyped } from 'react-typed';

const Profile = () => {
    const myPic = "assets/passsporrt.jpg"
    return ( 
       <div className=''>
           {/*  for small screen or phone screen */}
           <div className=" md:hidden text-white h-[900px] w-[100%]  py-10 bg-gray-950 bg-image-pic mt-20 rounded-md shadow-custom">
            {/* <div className=' w-[90%] h-[820px] absolute'>
                <img
                src={Logo2}             // backgroung image
                    alt="Full Image"
                    className="w-full h-[820px] object-cover absolute opacity-20  mx-auto"
            />
            </div> */}

            
            

            <div className=" m-5 border border-[#10c2aa] rounded-md h-[160px] w-[150px]  ">
            <img
                        src={myPic}
                            alt="Full Image"
                            className="w-full h-full object-cover rounded-md mx-auto"
                    />
            </div>

            <div className="text-1xl ml-2 pl-2">
                <div className=" ">
                <label className='text-gray-400'>Name: </label>
                <p className=" text-[#04b8b2] hidden md:block">Emmanuel Victor</p>
                <div className="text-white md:hidden ">
            
            <h1 className="text-[#04b8b2] ">Emmanuel Victor</h1>
            <ReactTyped
                strings={['Welcome to my portfolio!', 'I am a software engineer,', 'Humble/willing', 'And Passionate.']}
                typeSpeed={200}
                backSpeed={30}
                loop
                className="text-[#d8a250] font-bold text-1xl ml-2 mt-12"
            />
            </div>
      </div>

                <div className=" ">
                <label className='text-gray-400'>Phone: </label>
                <p className=" text-[#04b8b2]">+234806614327</p>
                </div>

                <div className=" ">
                <label className='text-gray-400'>Email: </label>
                <p className=" text-[#04b8b2]">ve48381@gmail.com</p>
                </div>

                <div className=" ">
                <label className='text-gray-400'>Git: </label>
                <a href="https://github.com/gem870"><p className=" text-[#04b8b2] transition-transform duration-500 ease-in-out transform hover:scale-110">gem870 @ git page</p></a>
                </div>

                <div className=" ">
                <label className='text-gray-400'>LinkedIn: </label>
                <a href="https://www.linkedin.com/in/chibuike-emmanuel-b8b29b269/"><p className=" text-[#04b8b2] transition-transform duration-500 ease-in-out transform hover:scale-110">Chibuike (Victor) Emmanuel</p></a>
                </div>
                <br /> 

             <div className=''>
                
                <h1 className='mt-2 text-gray-400'>-> Skills:</h1>
                <p className='ml-4 text-[#fa2d5d]'>C++</p>
                <p className='ml-4 text-[#fa2d5d]'>Qt/Qml</p>
                <p className='ml-4 text-[#fa2d5d]'>Python</p> 
                <h1 className='mt-2 text-gray-400'>-> Web</h1>
                <p className='ml-4 text-[#fa2d5d]'>MERN stack</p>
                <h1 className='mt-2 text-gray-400'>-> Control V.</h1>
                <p className='ml-4 text-[#fa2d5d]'>Git</p>
                

            </div>

      <div className="py-4">
      <a 
        href="Resume.pdf"
        download="Emmanuel Victor(Resume)"
      ><button className="bg-[#10c2aa] px-4 md:px-10 p-2 rounded-md text-black transition-transform duration-500 ease-in-out transform hover:scale-110">Download Resume</button></a>
      </div>

     </div>
</div>




        {/* for mid to big screens */}
        <div className='hidden  md:block   md:w-[40%] lg:w-[25%] z-[10] fixed h-[100%]'>
        <div className=' mt-[27%] h-[87%] scroll-container border-r border-r-gray-800'>
            <div className=" text-white h-[900px]  ">

            <div className=" h-[87%] w-[100%] absolute z-[-10] mt-[-20px] ">
            <img
                        src={Logo2}             // backgroung image
                            alt="Full Image"
                            className="w-[100%] h-full object-cover opacity-30  mx-auto"
                    />
            </div>

            <div className=" m-5 border-2 border-[#10c2aa] h-[200px] w-[200px]  ">
            <img
                        src={myPic}
                            alt="profile picture"
                            className="w-full h-full object-cover  mx-auto"
                    />
            </div>

            <div className="text-1xl ml-2 pl-2">
                <div className=" ">
                <label className='text-gray-400'>Name: </label>
                <p className=" text-[#04b8b2] hidden md:block">Emmanuel Victor</p>
                <div className="text-white md:hidden ">
            
            <h1 className="text-[#04b8b2] ">Emmanuel Victor</h1>
            <ReactTyped
                strings={['Welcome to my portfolio!', 'I am a software engineer,', 'Humble/willing', 'And Passionate.']}
                typeSpeed={200}
                backSpeed={30}
                loop
                className="text-[#d8a250] font-bold text-1xl ml-2 mt-12"
            />
            </div>
      </div>

                <div className=" ">
                <label className='text-gray-400'>Phone: </label>
                <p className=" text-[#04b8b2]">+234806614327</p>
                </div>

                <div className=" ">
                <label className='text-gray-400'>Email: </label>
                <p className=" text-[#04b8b2]">ve48381@gmail.com</p>
                </div>

                <div className=" ">
                <label className='text-gray-400'>Git: </label>
                <a href="https://github.com/gem870"><p className=" text-[#04b8b2] transition-transform duration-500 ease-in-out transform hover:scale-110">gem870 @ git page</p></a>
                </div>

                <div className=" ">
                <label className='text-gray-400'>LinkedIn: </label>
                <a href="https://www.linkedin.com/in/chibuike-emmanuel-b8b29b269/"><p className=" text-[#04b8b2] transition-transform duration-500 ease-in-out transform hover:scale-110">Chibuike (Victor) Emmanuel</p></a>
                </div>
                <br />

                <div className=''>
                    <h1 className='mt-2 text-gray-400'>-> Skills:</h1>
                    <p className='ml-4 text-[#fa2d5d]'>C++</p>
                    <p className='ml-4 text-[#fa2d5d]'>Qt/Qml</p>
                    <p className='ml-4 text-[#fa2d5d]'>Python</p> 
                    <h1 className='mt-2 text-gray-400'>-> Web</h1>
                    <p className='ml-4 text-[#fa2d5d]'>MEARN stack</p>
                    <h1 className='mt-2 text-gray-400'>-> Control V.</h1>
                    <p className='ml-4 text-[#fa2d5d]'>Git</p>
               </div>

            <div className="py-4">
            <a 
                href="Resume.pdf"
                download="Emmanuel Victor(Resume)"
            ><button className="bg-[#10c2aa] px-4 md:px-10 p-2 rounded-md text-black transition-transform duration-500 ease-in-out transform hover:scale-110">Download Resume</button></a>
            </div>

            </div>


        </div> 
        </div>
        </div>

    </div>
     );
}
 
export default Profile;