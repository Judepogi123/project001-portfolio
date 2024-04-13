import React from "react";
import "../style.css";

//View
import LandingPage from "../view/LandingPage";
import Projects from "../view/Projects";
import TechStack from "../view/TechStack";
import About from "../view/About";

const Home = () => {
  return (
    <div
      id="home"
      className="home w-screen h-screen overflow-x-hidden scroll-smooth
     bg-[#f1f1f1] relative"
    >
      <div className=" w-[100%] h-[100vh] ">
        <LandingPage />
      </div>
      <div className=" w-full h-full">
    <About/>
      </div>
      <div className=" w-[100%] h-auto lg:h-[100vh] pt-2 lg:pt-0 pb-2 lg:pb-0">
        <TechStack />
      </div>
      <div className=" w-[100%] h-[100vh]">
        <Projects />
      </div>
    </div>
  );
};

export default Home;
