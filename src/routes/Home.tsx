import React from "react";
import "../style.css";

//View
import LandingPage from "../view/LandingPage";
import Projects from "../view/Projects";

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
      <div className=" w-[100%] h-[100vh]">
        <Projects />
      </div>
    </div>
  );
};

export default Home;
