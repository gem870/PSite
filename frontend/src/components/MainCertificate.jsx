import React from "react";



const mainCertificate = () => {
    const images = [
        'certificates/maturity cert.jpg',
        'certificates/Emmanuel cert.PNG',
        'certificates/Adas certificates.PNG',
        'certificates/Qt practical cert.PNG',
        // more images...
      ];
const Logo = "work station.jpg"

    return ( 
        <div className=" z-10 relative ">
        {images.map((image, index) => (
          <div key={index} >
        <div className="animate-fadeIn w-full  bg-[#000300] md:w-[60%] lg:w-[74%]  right-0 pt-[20%] md:pt-[15%] lg:pt-[10%] md:px-10   mx-auto float-right ">

            <div className=" md:w-[-50%] lg:w-[-50%]  h-[30%] lg:h-[30%] md:h-[30%] xl:h-[35%] 2xl:h-[70%]  2xl:pl-[10%] 2xl:pr-[30%]">
              <div className="shadow-custom">
            <div className="h-[250px] md:h-[260px] lg:h-[500px] sm:px-2 md:w-[-40%] 2xl:h-full px-2 border border-gray-700 rounded-md shadow-custom md:p-2 justify-center items-center flex">
            <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-[100%] h-full object-cover  rounded-md"
            />
            </div>
            </div>
                <div className="p-4">
                <a 
                   href={image} 
                   download={`Image_${index + 1}.jpg`}

                ><button className="bg-[#10c2aa] px-4 md:px-10 p-2 rounded-md text-black transition-transform duration-500 ease-in-out transform hover:scale-110">Download Certificate</button></a>
                </div>
            </div>

        </div>
        </div>
      ))}
    </div>
     );
}
 
export default mainCertificate;