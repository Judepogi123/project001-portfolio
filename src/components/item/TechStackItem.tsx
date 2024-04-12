import React from 'react';
import { TechStackProps } from '../../interface/data';

import ReactIcon from "../../assets/react.svg";

import Img from '../ui/Img';

const TechStackItem = ({...props}:TechStackProps) => {
  return (
    <div className=' w-full h-[90px] border rounded'>
        <div className=' w-full h-[70%] p-1'>
            <div className="w-full h-full ">
                <Img src={props.imgSrc} onLoad={true}/>
            </div>
        </div>
        <div className=' w-full h-[30$] text-center'><p>{props.name}</p></div>
    </div>
  )
}

export default TechStackItem