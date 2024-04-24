import React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
} from "@material-tailwind/react";

import { TimelineDataProps } from "../interface/data";
import { dataList } from "../_mock_data/educationList";

const About = () => {
  return (
    <div className=" w-full h-full flex flex-col lg:flex-row">
      <div className=" w-full lg:w-1/2 h-screen flex justify-center items-center p-0 lg:p-12">
        <div className=" w-full h-full lg:w-auto lg:h-auto p-2 pr-8 pl-8">
          <h1 className=" font-custom1 text-4xl">About me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            veniam aliquid ducimus id. Obcaecati nobis a magni accusamus
            delectus autem eveniet et. Suscipit blanditiis deleniti animi,
            maxime accusantium aperiam inventore.
          </p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 h-screen p-1 lg:p-8 flex items-center justify-center flex-col">
        <div className=" w-full mb-4 text-left">
          <p className="font-custom1 text-4xl">Educations</p>
        </div>
        <Timeline>
          {dataList.reverse().map((item)=>(
            <TimelineItem>
            <TimelineConnector className=" text-slate-800" />
            <TimelineHeader className="h-3">
              <TimelineIcon />
              <Typography
                variant="h6"
                className="leading-none"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {item.timestamp}
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography
                variant="small"
                className="font-semibold text-gray-600"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {item.schoolAttended}{" - "}{item.course}
              </Typography>
              <Typography
                variant="small"
                className=" font-normal text-gray-600"
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                {item.desc}
              </Typography>
            </TimelineBody>
          </TimelineItem>
          ))}
          
          
        </Timeline>
      </div>
    </div>
  );
};

export default About;
