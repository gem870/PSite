




const Socials = () => {
    const fb = "assets/facebook.png"
    const git = "assets/github.png"
    const instagram = "assets/instagram.png"
    const linkedin = "assets/linkedin.png"
    return ( 
        <div className=" bg-[#34928f] fixed right-4 bottom-[5px] p-1 w-[50%] md:w-[20%] mx-auto justify-center rounded-sm shadow-lg max-w-xs z-20 hover:animate-none  flex">
        <a href="#"><img src={fb} className="w-[30px] md:mx-2 mx-2 transition-transform duration-500 ease-in-out transform hover:scale-110" alt="fb" /></a>
        <a href="https://github.com/gem870"><img src={git} className="w-[30px] md:mx-2 mx-2 transition-transform duration-500 ease-in-out transform hover:scale-110" alt="git" /></a>
        <a href="#"><img src={instagram} className="w-[30px] md:mx-2 mx-2 transition-transform duration-500 ease-in-out transform hover:scale-110" alt="inster" /></a>
        <a href="https://www.linkedin.com/in/chibuike-emmanuel-b8b29b269/"><img src={linkedin} className="w-[30px] md:mx-2 mx-2 transition-transform duration-500 ease-in-out transform hover:scale-110" alt="linkdin" /></a>
      </div>
    );
}
 
export default Socials;