import React, { useState, useEffect, useRef } from "react";
import DOMPurify from 'dompurify'; 
import axios from 'axios';

const VideoPlayer = ({ url }) => {
    const videoRef = useRef(null);
    const videoUrl = `${process.env.REACT_APP_API_URL}/${url}`;

    useEffect(() => {
        const videoElement = videoRef.current;

        const handleCanPlay = () => {
            videoElement.play();
            videoElement.style.display = 'block';
        };

        if (videoElement) {
            videoElement.addEventListener('canplay', handleCanPlay);
        }

        return () => {
            if (videoElement) {
                videoElement.removeEventListener('canplay', handleCanPlay);
            }
        };
    }, [url]);

    return (
        <div className="video-player shadow-custom w-full h-full rounded-md ">
            <video
                ref={videoRef}
                className="w-full h-full object-cover rounded-md"
                muted
                loop
                controls={true}
                style={{ display: 'none' }}
                autoPlay
            >
                <source 
                    src={videoUrl} 
                    type="video/mp4"
                />
            </video>
        </div>
    );
};

const Project = () => {
    const git = "github.png";
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [visibleProjects, setVisibleProjects] = useState({}); // Object to track visibility

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/project`);
                setProjects(response.data);
                console.log(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching projects');
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    const toggleHistoryVisibility = (id) => {
        setVisibleProjects((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    if (loading) {
        return (
            <div className="flex justify-center mt-10">
                <p className="text-gray-400 text-2xl">Loading...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center mt-10">
                <p className="text-red-500 text-2xl">{error}</p>
            </div>
        );
    }

    return (
        <div className=" 2xl:px-[7%] pb-10">
            <ul>
                {projects.map((project) => {
                    const imageUrl = `${process.env.REACT_APP_API_URL}/${project.file}`;

                    return (
                        <li key={project._id}>
                            <div className="shadow-custom my-20 w-full flex justify-end rounded-md animate-fadeIn relative ">
                                <div className="flex items-center justify-center w-full  bg-cover bg-center rounded-md ">
                                    {project.mediaType === 'image' ? (
                                        <img
                                            src={imageUrl}
                                            alt="Project Image"
                                            className="w-full h-full object-cover  shadow-custom rounded-md"
                                        />
                                    ) : (
                                        <VideoPlayer url={project.file} />
                                    )}
                                </div>

                                <button 
                                    onClick={() => toggleHistoryVisibility(project._id)} 
                                    className="absolute top-5 right-5 2xl:bg-[#1a887996] text-white md:px-4 md:py-1 rounded-lg shadow-lg z-10 "
                                >
                                    {!visibleProjects[project._id] ? '>>' : '<<'}
                                </button>

                                <div
                                    className={`history flex flex-col h-[100%] w-[85%] xl:w-[55%] border-l border-gray-500  absolute bg-black bg-opacity-85 rounded-md rounded-l-3xl transform transition-all duration-500 ease-out ${!visibleProjects[project._id] ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} right-0`}
                                    style={{ transitionTimingFunction: 'cubic-bezier(0.68, -0.55, 0.27, 1.55)' }} // Bounce effect
                                >
                                    
                                        <h2 className="font-bold text-[#35d4bf] 2xl:text-xl pl-4 py-1 md:p-4 ">{project.title}</h2>
                                        <div className="h-[75%] scroll-container  ">
                                            <p className="text-gray-400 pl-4  pr-4 text-[14px] 2xl:text-[18px] "
                                              dangerouslySetInnerHTML={{
                                                __html: DOMPurify.sanitize(project.description),
                                            }}
                                            >
                                            </p>
                                        </div>

                                        <div className=" px-4 md:py-1 flex">
                                        <a href={project.url}>
                                            <button className="bg-[#04b099] 2xl:p-2 bg-opacity-60 hover:bg-opacity-90 rounded-md text-black transition-transform duration-500 ease-in-out transform hover:scale-110">
                                                <img src={git} alt="GitHub" className="w-6" />
                                            </button>
                                        </a> 
                                        <p className="text-[10px] 2xl:text-[14px] text-red-500 mt-2 mx-1 2xl:mt-4">Explore github</p>
                                    </div>
                                

                                    
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Project;
