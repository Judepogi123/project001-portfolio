import React from "react";

import { techStackList } from "../_mock_data/techStackList";

import { TechStackProps } from "../interface/data";

import TechStackItem from "../components/item/TechStackItem";

const TechStack = () => {
  const handleFilterList = (data: TechStackProps[], type: string) => {
    return data.filter((item) => item.type === type);
  };
  return (
    <div className=" w-full h-full  flex flex-col justify-center items-center">
      <div className=" p-4 w-full">
        <p className=" ml-32 font-custom1 text-2xl font-medium">Technologies</p>
      </div>
      <div className=" w-4/5 h-auto grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 grid-rows-1 gap-2 mt-2 border-slate-950">
        {handleFilterList(techStackList, "front").map((item) => (
          <TechStackItem {...item} />
        ))}
      </div>

      <div className=" w-4/5 h-auto grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 grid-rows-1 gap-2 mt-2">
        {handleFilterList(techStackList, "back").map((item) => (
          <TechStackItem {...item} />
        ))}
      </div>

      <div className=" w-4/5 h-auto grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 grid-rows-1 gap-2 mt-2">
        {handleFilterList(techStackList, "full").map((item) => (
          <TechStackItem {...item} />
        ))}
      </div>

      <div className=" w-4/5 h-auto grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 grid-rows-1 gap-2 mt-2">
        {handleFilterList(techStackList, "lib").map((item) => (
          <TechStackItem {...item} />
        ))}
      </div>
      <div className=" w-4/5 h-auto grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 grid-rows-1 gap-2 mt-2">
        {handleFilterList(techStackList, "data").map((item) => (
          <TechStackItem {...item} />
        ))}
      </div>
      <div className=" w-4/5 h-auto grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-8 grid-rows-1 gap-2 mt-2">
        {handleFilterList(techStackList, "other").map((item) => (
          <TechStackItem {...item} />
        ))}
      </div>
      
    </div>
  );
};

export default TechStack;
