import { useEffect, useState } from 'react';

const MiniCertificate = () => {
  const images = [
    'certificates/maturity cert.jpg',
    'certificates/Emmanuel cert.PNG',
    'certificates/Adas certificates.PNG',
    'certificates/Qt practical cert.PNG',
    // more images...
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(timer); // Clear interval on component unmount
  }, [images.length]);

  return (
    <div>
      <div className="md:fixed hidden lg:block md:right-0 mr-2 md:w-[20%] md:h-[25%] md:mt-[8%] z-[1] text-gray-500 pl-2 ">
        <h1 className="font-bold text-[#04b8b2]">Certificates</h1>
        <a href="/certificate">
          <div className="shadow-custom p-1 md:h-[100%] rounded-sm  border border-gray-800">
            <img
              src={images[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
              className="w-full h-full object-cover  "
            />
          </div>
        </a>
      </div>
    </div>
  );
};

export default MiniCertificate;
