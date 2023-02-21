import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full text-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 items-center">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Search Website, design
or Marketing?</h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
      <div className="my-4">
        <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input className="p-3 flex w-full text-black rounded-md " type="email" name="" id="" placeholder="Enter Your Email@email.com" />
            <button className='bg-[#35A7FF] text-black rounded-md  w-[200px] ml-4 my-6 px-6 py-3 font-bold'>
              Notify Me
            </button>
          </div>
          <p>
            We care bout the protection of your data. Read our{' '}
            <span className='text-[#35A7FF]'>Privacy Policy.</span>
          </p>
      </div>
      </div>
    </div>
  );
};

export default Newsletter;
