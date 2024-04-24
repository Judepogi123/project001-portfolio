import React from "react";

import AnimationContainer from "../components/display-animation/AnimationContainer";
import contactEmal from "../assets/animations/contact-email-1.json";

import Input from "../components/ui/Input";
import Textarea from "../components/ui/Textarea";
import Button from "../components/ui/Button";


const Contact = () => {
  return (
    <div className=" w-full h-full flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/2 h-full lg:flex items-center justify-center hidden">
        <div className=" w-auto h-auto flex justify-center flex-col items-center">
          <AnimationContainer src={contactEmal} className=" w-72" loop={true} />
          <div className=" lg:pl-24 lg:pr-24">
            <p className=" text-justify p-4 font-custom1">
            Hey there! Drop me an email anytime if you wanna chat about a project or team up. Or hit me up on social media directly using the link below. Cheers! 🚀            </p>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 h-full p-2 lg:p-8">
        <form
          action=""
          className=" w-full h-full flex flex-col justify-between rounded-md bg-zinc-100 shadow-md"
        >
          <div className=" w-full h-auto flex flex-col gap-2 p-4 mt-4">
            <div className="w-full p-2 lg:p-4 text-center">
              <p className=" font-custom1 text-3xl">Send me an Email</p>
            </div>
            <Input
              variant="outlined"
              className=" bg-white"
              label={"Email"}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
            <Input
            className=" bg-white"
              label={"Subject"}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
            <Textarea
            className=" bg-white"
              label="Message"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            />
          </div>

          <div className="  w-full h-auto flex justify-center items-center p-4">
            <Button className=" active:bg-slate-700 w-full">Send</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
