import React from "react";

import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Newsletter = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();    
    emailjs.sendForm('service_fngiqt8', 'template_8gor31f', form.current, 'wS1aXeh-WyBXn0ltK')
    e.target.reset()
  };

  return (
    <div className="w-full text-white py-16 px-4" id="Newsletter">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 items-center">
        <div className="lg:col-span-2">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Search Website, design
or Marketing?</h1>
          <p>Sign up to our newsletter and stay up to date.</p>
        </div>
      <div className="my-4">
        
            <form ref={form} onSubmit={sendEmail} className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input required className="p-3 flex w-full text-black rounded-md " type="email" name="email" id="email" type='email' placeholder="Enter Your Email@email.com" />
            <button type="submit" className='bg-[#35A7FF] text-black rounded-md  w-[200px] ml-4 my-6 px-6 py-3 font-bold'>
              Notify Me
            </button>
            </form>
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
