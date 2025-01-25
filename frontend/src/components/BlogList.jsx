import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import DOMPurify from 'dompurify';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/blog`);
        setBlogs(response.data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="pt-[15%] w-full md:pr-10 pb-10">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <p className="text-gray-400 text-xl">Loading...</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:mt-20 pl-4">
          {blogs.map((blog) => (
            <div key={blog._id} className="flex justify-center items-center">
              <Link to={`/blog/${blog._id}`} className="w-full">
                <div className="py-4 animate-fadeIn w-full">
                  <div className="border shadow-custom border-[#04b8b281] hover:border-[#a7ebe881] h-[150px] border-l-[15px] rounded-sm bg-[#071f1c] flex transition-transform duration-500 ease-in-out transform hover:scale-105 hover:shadow-custom overflow-hidden">
                    <div className="flex flex-col justify-center h-full px-2">
                      <h2 className="font-bold text-[#fa2d5de5] pt-2">{blog.title}</h2>
                      <p className="text-gray-400 line-clamp-3"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(blog.mini_description),
                      }}
                      ></p>

                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogList;
