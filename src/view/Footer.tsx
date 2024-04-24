import React from "react";

import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" w-full h-full bg-[#22223b] flex flex-col justify-between text-white">
      <div className=" w-full h-full flex flex-col justify-between">
        <div className=" w-auto h-auto flex flex-col gap-4 lg:p-8">
          <div className=" flex items-center gap-4">
            <FaFacebookF fontSize={40} />
            <p>Jude Demnuvar Linga Rbleza</p>
          </div>

          <div className=" flex items-center gap-4">
            <FaTwitter fontSize={40} />
            <p>JDgenggeng</p>
          </div>
          <div className=" flex items-center gap-4">
            <FaInstagram fontSize={40} />
            <p>riblezaGengGeng</p>
          </div>
        </div>

        <div className=" lg:pl-24 lg:pr-24">
          <p className=" text-center text-sm font-custom1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rerum
            inventore, ullam quidem et reprehenderit, exercitationem dolorem
            eius corporis quo laudantium fugit omnis dicta eos eveniet quisquam
            doloribus, ipsum est!
          </p>
        </div>
      </div>
      <div className=" w-full p-2">
        <p className=" text-lg font-custom1 text-white text-center">
          Jude Demnuvar Linga Ribleza's Peronsal Portfolio{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
