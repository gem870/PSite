import React from "react";
import Mail from './assets/mail.png'
import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";



const MessageIcone = () => {
    const closeIcon = "assets/cross-mark.png"
    const navigate = useNavigate();
    const [mssgView, setMssgView] = useState(false);
    const [sentMessage, setSentMessafge] = useState('')
  
    
      const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setTimeout(() => {
          setSentMessafge('Message sent!');
          setTimeout(() => {
            window.location.reload();
        }, 1000);
        }, 2000);
        
        if (!formData.name || !formData.email || !formData.message) {
          alert("All fields are required");
          return;
        }
      
        try {
          const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/message`, formData);
          console.log('Message sent:', response.data);
        
         
        } catch (error) {
          console.error('Error submitting form:', error.response?.data || error.message);
        }
      };

   const handleClosemssg1 = ()=>{
    setTimeout(() => {
        setMssgView(false);
    }, 800);
   }
   const handleClosemssg2 = ()=>{
    setTimeout(() => {
        setMssgView(true);
    }, 500);
  }



    return ( 
        <div className="">
      <div className=" hidden md:block h-screen  ">
      <div className={mssgView ? " animate-fadeIn  fixed  bg-opacity-80 z-20  h-full w-[100%] pt-20  bg-black ease-linear" : "hidden"}>
            
           
            <div id="message" className="mx-auto text-center md:flex md:flex-col md:justify-center shadow-custom md:mt-20 md:h-[70%] xl:h-[60%] 2xl:h-[70%]  md:w-[60%] bg-black bg-opacity-70 z-10 relative  mb-20">
                
            <div className=" text-gray-500 text-[20px] mt-20 mb-10 mx-auto text-center flex flex-col justify-center ">
            <div className="mr-0 mx-auto hover:transition-transform  duration-500 ease-in-out transform hover:scale-110 w-10  " onClick={handleClosemssg1}>
                 <img
                        src={closeIcon}
                            alt="X"
                            className="w-full h-full object-cover rounded-3xl " 
                    />
                </div>
                
                <h2 className="p-5 font-bold text-[15px] md:text-[20px] text-green-500">I would love to hear from you.</h2>

                <form className=" " onSubmit={handleSubmit} >
                        <div className="mx-auto  justify-center ">

                            <div className="xl:flex  md:block">
                                <div className="block mt-1">
                                    <input  
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required 
                                        className="my-1  md:my-6 py-2 px-2 w-[250px] md:w-[350px] bg-[#28302a] rounded-md text-gray-100 border border-gray-500" placeholder="Full name"
                                    />  <br />
                                                
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange} 
                                        className="my-1  md:my-1 py-2 px-2 w-[250px] md:w-[350px] bg-[#28302a] rounded-md text-gray-100 border border-gray-500" placeholder="Email"
                                    /> 
                                            
                                </div>

                                <div className="md:mx-3 ">
                                    <textarea
                                   name="message"
                                   value={formData.message}
                                   onChange={handleChange}
                                   required
                                    placeholder="Message"  className="px-[10px] my-4 w-[250px] md:w-[345px] bg-[#28302a] rounded-md text-gray-100 border border-gray-500 h-[200px]"></textarea>
                                    <p className=" text-green-500">{sentMessage}</p>
                                </div>
                                </div>

                                <div className="p-2 md:flex">
                                <button type="submit"   className="bg-[#10c2aa] mb-6 px-[60px] mr-1 md:px-10 p-2 rounded-md text-black transition-transform duration-500 ease-in-out transform hover:scale-110">Submit</button>
                            
                            </div>
                        </div>    
                </form>
        </div>
        </div>
         
    </div>
         <div className="fixed right-4 bottom-[60px] p-2 rounded-lg shadow-lg max-w-xs z-20 hover:animate-none animate-bounce" onClick={handleClosemssg2}>
            <a href="#message"><img src={Mail} className="w-[40px] transition-transform duration-500 ease-in-out transform hover:scale-110" alt="mail" /></a>
            </div>

      </div>



        {/* Small screen section */}

        <div className={mssgView ? " inset-0  flex justify-center items-center " : ""}>
        <div className={mssgView ? " md:hidden h-screen z-20 bg-black bg-opacity-80 w-full fixed inset-0 flex justify-center items-center ease-linear animate-fadeIn " : "hidden"}>
            
           
            <div id="message" className="mx-auto text-center md:flex md:flex-col  px-5 md:justify-center shadow-custom md:mt-20 md:h-[60%]  md:w-[60%] bg-black bg-opacity-70 z-10  relative  mb-40">
                
            <div className=" text-gray-500 text-[20px] mt-20 mb-10 mx-auto text-center flex flex-col justify-center ">
            <div className="mr-0 mx-auto hover:transition-transform duration-500 ease-in-out transform hover:scale-110 w-10" onClick={handleClosemssg1}>
                 <img
                        src={closeIcon}
                            alt="X"
                            className="w-full h-full object-cover rounded-3xl" 
                    />
                </div>
                
                <h2 className="p-5 font-bold text-[15px] md:text-[20px] text-green-500">I would love to here from you.</h2>

                <form onSubmit={handleSubmit}>
                        <div className="mx-auto  justify-center">

                            <div className="md:flex">
                                <div className="block mt-1">
                                    <input  
                                         type="text"
                                         name="name"
                                         value={formData.name}
                                         onChange={handleChange}
                                         required
                                        className="my-1 md:ml-2 md:my-6 py-2 px-2 w-[250px] md:w-[350px] bg-[#28302a] rounded-md text-gray-100 border border-gray-500" placeholder="Full name"
                                    />  <br />
                                                
                                    <input  
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="my-1 md:ml-2 md:my-1 py-2 px-2 w-[250px] md:w-[350px] bg-[#28302a] rounded-md text-gray-100 border border-gray-500" placeholder="Email"
                                    /> 
                                            
                                </div>

                                <div className="md:mx-3">
                                    <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="Message"  className="px-[10px] mt-2 w-[250px] md:w-[255px] bg-[#28302a] rounded-md text-gray-100 border border-gray-500 h-[200px]"></textarea>
                                    <p className=" text-green-500">{sentMessage}</p>
                                </div>
                                </div>

                                <div className="p-2 md:flex">
                                <button type="submit"  className="bg-[#10c2aa] mb-6 px-[60px] mr-1 md:px-10 p-2 rounded-md text-black transition-transform duration-500 ease-in-out transform hover:scale-110">Submit</button>
                            
                            </div>
                        </div>    
                </form>
        </div>
        </div>
         
    </div>
         <div className="fixed md:hidden right-4 bottom-[60px] p-2 rounded-lg shadow-lg max-w-xs z-50 hover:animate-none animate-bounce" onClick={handleClosemssg2}>
            <a href="#message"><img src={Mail} className="w-[40px] transition-transform duration-500 ease-in-out transform hover:scale-110" alt="mail" /></a>
            </div>
        </div>


    </div>
     );
}
 
export default MessageIcone;