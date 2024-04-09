import React from "react";
import { SiGmail } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const LandingPage = () => {
  return (
    <div className=" w-screen h-screen flex">
      {/* Left-side Info */}
      <div className=" w-2/5 h-screen text-right flex items-center justify-end">
        <div className=" w-auto flex flex-col">
          <div className="">
            <h1 className=" font-bold font-custom1 text-4xl">Jude Demnuvar L. Ribleza</h1>
          </div>

          <div className=" w-auto flex gap-1 font-semibold font-custom1 justify-end">
            <h2 className=" text-[#c1121f] text-2xl">Web</h2>
            <h2 className="text-2xl">Developer</h2>
          </div>
        </div>
      </div>

      {/* vertical Divider */}
      <div className=" w-auto h-screen p-2 flex items-center">
        <span className=" w-[1px] h-[60%] bg-[#242424]"></span>
      </div>

      {/* RIght-side Info */}
      <div className=" w-3/5 h-screen flex items-center">
        <div className=" w-auto h-auto flex flex-col gap-0">
          <div className=" w-auto p-2 flex items-center gap-4">
            <SiGmail fontSize={25} color="#495057"/>
            <a href="#" className=" font-medium">juderibleza36@gmail.com</a>
          </div>
          <div className=" w-auto p-2 flex items-center gap-4">
            <FaFacebookSquare fontSize={25} color="#495057"/>
            <a className=" font-medium" href="https://www.facebook.com/judedemnuvar.ribleza.5?mibextid=ZbWKwL">https://www.facebook.com/jude...</a>
          </div>
          <div className=" w-auto p-2 flex items-center gap-4">
            <FaLinkedin fontSize={25} color="#495057"/>
            <a className=" font-medium" href="https://www.linkedin.com/in/jude-demnuvar-ribleza-ab9a24253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">https://www.linkedin.com/in/jude...</a>
          </div>
          <div className=" w-auto p-2 flex items-center gap-4">
            <FaGithub fontSize={25} color="#495057"/>
            <a className=" font-medium" >juderibleza36@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
