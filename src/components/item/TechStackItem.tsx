import React from "react";
import { TechStackProps } from "../../interface/data";

import ReactIcon from "../../assets/react.svg";

import Img from "../ui/Img";

const TechStackItem = ({ ...props }: TechStackProps) => {
  return (
    <div className=" w-full h-[90px] shadow-md border rounded">
      <div className=" w-full h-[70%] p-1">
        <div className="w-full h-full flex justify-center p-2">
          <Img
            className=" w-12"
            src="https://cdn.worldvectorlogo.com/logos/next-js.svg"
            onLoad={true}
          />
        </div>
      </div>
      <div className=" w-full h-[30$] text-center">
        <p className=" font-custom1 font-medium">{props.name}</p>
      </div>
    </div>
  );
};

export default TechStackItem;
