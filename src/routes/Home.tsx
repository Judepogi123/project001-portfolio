import React from "react";
import "../style.css";

//View
import LandingPage from "../view/LandingPage";
import Projects from "../view/Projects";
import TechStack from "../view/TechStack";
import About from "../view/About";
import Contact from "../view/Contact";
import Footer from "../view/Footer";

const Home = () => {
  return (
    <div
      id="home"
      className="home w-screen h-screen overflow-x-hidden scroll-smooth snap-y
     bg-[#f1f1f1] relative"
    >
      <div className=" w-[100%] h-[100vh] snap-center">
        <LandingPage />
      </div>
      <div className=" w-full h-auto lg:w-full lg:h-full snap-center">
        <About />
      </div>
      <div className=" w-[100%] h-auto lg:h-[100vh] pt-2 lg:pt-0 pb-2 lg:pb-0 snap-center">
        <TechStack />
      </div>
      <div className=" w-[100%] h-[100vh] snap-center">
        <Projects />
      </div>

      <div className=" w-full h-full lg:h-[80%]">
        <Contact/>
      </div>
      <div className=" w-full h-2/3 lg:h-[50%]">
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
