import React, { useState, useRef, useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/monokai.css';
import DOMPurify from 'dompurify'; 
import axios from 'axios';
import { useParams } from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);

  

    

    useEffect(() => {
        const fetchBlogDetails = async () => {
            try {
                const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog/${id}`);
                console.log("API Response:", response.data);
                console.log("File path:", response.data.file);
                console.log("Media type:", response.data.mediaType);
                setBlog(response.data);
            } catch (error) {
                console.log('API Response Error:', {
                    status: error.response?.status,
                    message: error.response?.data,
                    url: `${process.env.REACT_APP_API_URL}/api/blog/${id}`
                });
            }
        };

        fetchBlogDetails();
    }, [id]);

    const VideoPlayer = ({ url }) => {
        const videoUrl = `${process.env.REACT_APP_API_URL}/${url}`;
        console.log(">>>>>>>> video url: ", videoUrl)
        return (
            <div className="video-player shadow-custom w-full h-full">
                <video
                    src={videoUrl}
                    className="w-full h-full object-cover"
                    controls
                />
            </div>
        );
    };

    useEffect(() => {
        // Only run highlight.js when blog data exists
        if (blog) {
            hljs.highlightAll();
        }
    }, [blog]);

    const copyCode = () => {
        const codeBlock = document.getElementById('codeBlock').innerText;
        navigator.clipboard.writeText(codeBlock).then(() => {
            alert('Code copied to clipboard!');
        });
    };

    // Add null check before rendering media
    const renderMedia = () => {
        if (!blog || !blog.file) return null;
        
        const mediaUrl = `${process.env.REACT_APP_API_URL}${blog.file}`;
        console.log('>>> Media URL:', mediaUrl);
        
        return blog.mediaType === 'image' ? (
            <img
                src={mediaUrl}
                alt={blog.title}
                className="w-full h-full object-cover rounded-md"
            />
        ) : (
            <VideoPlayer url={mediaUrl} />
        );
    };

    if (!blog) {
        return (
            <div className="flex items-center justify-center h-screen">
                <p className="text-gray-400 text-2xl">Loading...</p>
            </div>
        );
    }
    
 
    return (
        <div className="h-screen mx-auto justify-center z-10 relative md:w-[60%] 2xl:w-[75%] pt-[13%] 2xl:pt-[0%] md:float-right bg-[#000300]">
            <div className="2xl:flex h-full animate-fadeIn px-[4%] 2xl:pr-[12%] scroll-container scroll-hidde pt-5 2xl:pt-[5%]">
                <div className="w-[100%] 2xl:w-[60%] h-[30%] 2xl:h-[30%] 2xl:mx-10 p-4 2xl:mt-[8%]">
                    <div className="w-full h-[100%] rounded-md shadow-custom text-white">
                        <div className="media-container shadow-custom h-full">
                            {/* {renderMedia()} */}
                            <div className="video-player shadow-custom w-full h-full">
                                <video
                                    src="/assets/Developer Coding Background.mp4" // Path relative to the public folder
                                    
                                    autoPlay
                                    loop
                                    className="w-full h-full object-cover"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-full scroll-container scroll-hidde  px-2">
                    <div className="p-4 text-gray-500 w-full 2xl:mt-[15%]">
                        <h2 className="font-bold text-xl text-[#c52e51ea]">{blog.title}</h2>
                          {/* Render sanitized HTML content for description */}
                          <div
                            className="p-2 2xl:text-[18px]"
                            dangerouslySetInnerHTML={{
                                __html: DOMPurify.sanitize(blog.description),
                            }}
                        />
                    </div>

                    <div className="relative mb-4 py-2 px-2 bg-[#0a1525] text-gray-500 rounded-sm overflow-x-auto">
                        <button
                            onClick={copyCode}
                            className="absolute top-2 right-4 bg-gray-700 bg-opacity-60 text-gray-300 px-4 py-2 mt-2 rounded-full text-xs hover:bg-gray-700"
                        >
                            Copy
                        </button>

                        <pre id="codeBlock">
                          {/*  <code className={`language-${blog.programmingLanguage}`}> */}
                            <code className="language-c++">
                                {blog.code || 'Loading content...'}
                            </code>
                        </pre>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogDetails;
