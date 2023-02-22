import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import{useState} from 'react';

const Navbar = () => {
    const [nav, setNav] = useState(false);


    const handleNav = () =>{
        setNav(!nav);
    }

  return (
    <div className="text-white flex justify-between items-center h-24 max-w-[1200px] mx-auto p-4">
      <h1 className="w-full text-3xl font-bold text-[#35A7FF] hover:text-white">BcoD.</h1>
      <ul className="hidden md:flex">
        <li className="p-4 hover:text-[#35A7FF]"><a href="#Hero">Home</a></li>
        <li className="p-4 hover:text-[#35A7FF]"><a href="#Analytics">Company</a></li>
        <li className="p-4 hover:text-[#35A7FF]"><a href="#Cards">Service</a></li>
        <li className="p-4 hover:text-[#35A7FF]"><a href="#Newsletter">Contact</a></li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        { nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}   
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]' }>
        <h1 className="w-full text-3xl font-bold text-[#35A7FF] hover:text-white mt-[1.9rem] m-4">BcoD.</h1>
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-gray-600 hover:text-[#35A7FF]"><a href="#Hero">Home</a></li>
          <li className="p-4 border-b border-gray-600 hover:text-[#35A7FF]"><a href="#Analytics">Company</a></li>
          <li className="p-4 border-b border-gray-600 hover:text-[#35A7FF]"><a href="#Cards">Service</a></li>
          <li className="p-4 hover:text-[#35A7FF]"><a href="#Newsletter">Contact</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
