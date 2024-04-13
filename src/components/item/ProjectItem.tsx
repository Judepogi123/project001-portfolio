import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


//Interfaces
import { ProjectItemProps } from "../../interface/data";

import Img from "../ui/Img";

const ProjectItem = ({ id, title, imgSrc,desc,date,client,type,setOnView, setSelectedProject }: ProjectItemProps) => {
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

  const handleSetOnView =(id: string)=>{  
    console.log("CLicked");
    setSelectedProject(id)
    setOnView(true)
  }

  return (
    <div onClick={()=> handleSetOnView(id)} className=" w-full h-full border rounded-sm p-4 bg-white opacity-80 backdrop-blur cursor-pointer">
      <div className=" w-full h-2/3 rounded-sm ">
        <Img src={imgSrc[0]} onLoad={true}/>
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
