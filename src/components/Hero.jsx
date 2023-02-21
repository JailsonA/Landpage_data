import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#35A7FF] font-bold p-2">UPCOMING GROWING WITH US</p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          Grow with BcoD.
        </h1>
        <div className="flex justify-center items-center p-2">
          <p className="md:text-4xl sm:text-3xl text-xl font-bold py-4">
            Fast, flexible and professional{" "}
          </p>
          <Typed
            className="md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2 text-[#35A7FF]"
            strings={["Website", "Design", "Videos"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Develop web design solutions to create a strong communication with the
          consumer on the web.
        </p>
        <button className="bg-[#35A7FF] w-[200px] rounded-md text-black my-6 mx-auto py-3 font-bold ">Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
