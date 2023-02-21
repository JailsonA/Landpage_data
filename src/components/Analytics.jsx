import React from "react";
import Laptop from "./../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="laptop" />
        <div className="flex flex-col justify-center">
          <p className="text-[#35A7FF] font-bold">We are the right choice</p>
          <h1 className="md:tex-4xl sm:text-3xl text-2xl font-bold">We develop your web solutions.</h1>
          <p>
            When the solution you are looking for is too specific to fit in with
            traditional solutions, it is necessary to develop solutions
            "tailored" to your needs.
          </p>
          <button className="bg-[#35A7FF] w-[200px] rounded-md text-white my-6 mx-auto md:mx-0 py-3 font-bold ">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
