// components/BlogCard.tsx

import Image from "next/image";
import React from "react";
import authorIcon from "@/public/Person.svg";
import timerLogo from "@/public/Hourglass One Quarter.svg";

interface BlogCardProps {
  title: string;
  description: string;
  imageSrc: string;
  authorName: string;
  createdBy: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  imageSrc,
  authorName,
  createdBy,
}) => {
  return (
    <div className="bg-white opacity-90 w-[348px] h-[380px] rounded-md shadow-lg flex flex-col ">
      <Image
        src={imageSrc}
        alt={title}
        className="w-full h-[240px] object-cover rounded-t-lg"
      />
      <div className="p-6 flex flex-col flex-grow bg-gray-800 text-white">
        <h3 className="text-xl font-bold mb-2 ">{title}</h3>
        <p className="text-white flex-grow">{description}</p>
        <p className="flex justify-between mt-2  items-center">
          <span className="flex gap-2 items-center">
            <Image src={authorIcon} alt="" className="h-[16px] w-[16px]" />
            {authorName}
          </span>
          <span className="flex gap-2 items-center">
            <Image src={timerLogo} alt="" />
            <span className="text-sm">{createdBy}</span>
          </span>
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
