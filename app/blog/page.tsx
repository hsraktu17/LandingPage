// pages/blog.tsx

import Image from "next/image";
import Navbar from "../../components/navbar";
import React from "react";
import MainImage from "../../public/Pexels Photo by cottonbro studio.png";
import BlogCard from "./BlogCard";

const Blog: React.FC = () => {
  return (
    <div className="relative w-full h-[579px]">
      <Image
        src={MainImage}
        alt="Image"
        className="w-full h-full object-cover"
        style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
      />
      <div className="absolute top-0 left-0 w-full h-full z-20">
        <Navbar />
        <div className="text-center text-white flex flex-col justify-center items-center mt-auto p-[120px]">
          <p className="text-5xl font-[600]"> Learn, Inspire, Achieve!</p>
          <p>
            Stay updated with the latest trends, tips, and stories in education
            and personal growth.
          </p>
        </div>
        <div className="w-full mx-auto p-[120px] flex justify-center"> 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10"> {/* Responsive grid */}
          {Array.from({ length: 4 }).map((_, index) => (
            <BlogCard
              key={index}
              title={`Blog Title ${index + 1}`}
              description="This is a brief description of the blog post. It provides an overview of the content and entices the reader to learn more."
              imageSrc= ""
              authorName= "Ritik Pal"
              createdBy="12:12GMT"

            />
          ))}
        </div>
      </div>
      </div>
     
    </div>
  );
};

export default Blog;