import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


interface ProjectProps {
  id: string;
  title: string;
  imgSrc: string[];
  desc: string;
  date: string;
  client?: string;
  type: string;
  setOnView:  React.Dispatch<React.SetStateAction<boolean>>
}

const ProjectItem = ({ id, title, imgSrc,desc,date,client,type,setOnView }: ProjectProps) => {
  const [isLoading, setIsLoading] = useState(true); // Track image loading state
  const [error, setError] = useState<string | null>(null); // Store potential errors

  useEffect(() => {
    const handleImageLoad = () => setIsLoading(false);
    const handleImageError = () => setError("Image failed to load.");

    const image = new Image();
    image.onload = handleImageLoad;
    image.onerror = handleImageError;
    image.src = imgSrc[0];

    return () => {
      image.onload = null;
      image.onerror = null;
    };
  }, [imgSrc[0]]); // Re-run effect on imgSrc change

  const handleSetOnView =()=>{  
    console.log("CLicked");
      
    setOnView(true)
  }

  return (
    <div onClick={handleSetOnView} className=" w-full h-full border rounded-sm p-4 bg-white opacity-80 backdrop-blur cursor-pointer">
      <div className=" w-full h-2/3 rounded-sm ">
        {isLoading && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {!isLoading && !error && (
          // ... other code
          <img
            src={imgSrc[0]}
            alt="Project"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "placeholder.jpg";
            }}
          />
        )}
      </div>
      <div className=" w-full flex flex-col gap-3">
        <p className=" font-custom1 font-semibold text-base">{title}</p>
        <p className=" font-light text-xs text-ellipsis overflow-hidden truncate">
          {desc}
        </p>
      </div>
    </div>
  );
};

export default ProjectItem;
