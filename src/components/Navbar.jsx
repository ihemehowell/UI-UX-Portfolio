import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  

  return (
    <nav className="w-full  sm:fixed backdrop-blur-sm py-4 px-8  ">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-white text-4xl font-bold underline">Mona</h1>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-300 focus:outline-none"
          >
           < FaBars className="w-6 h-6" />
          </button>
        </div>
        <ul className={`md:flex space-x-6 text-gray-300 text-md ${isOpen ? 'block' : 'hidden'} md:block absolute md:static bg-[#0d0d0d] md:bg-transparent left-0 w-full md:w-auto mt-4 md:mt-0 px-4 md:px-0 py-4 md:py-0 transition-all duration-300 ease-in-out`}>
          <li className="py-2 md:py-0 flex items-center gap-4">
            
            <a href="#home" onClick={() => setIsOpen(false)} className="hover:text-indigo-400 transition">Home</a>
          </li>
          <li className="py-2 md:py-0 flex items-center gap-2">
            
            <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-indigo-400 transition">Projects</a>
          </li>
          <li className="py-2 md:py-0 flex items-center gap-2">
            
            <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-indigo-400 transition">Contact</a>
          </li>
          <li className="py-2 md:py-0 flex items-center gap-2">
            
            <a href="https://drive.google.com/file/d/1KU2lCFxPK5JcOI5TbgJlyyWWx0kO2M_Q/view?usp=drivesdk" target="https://drive.google.com/file/d/1KU2lCFxPK5JcOI5TbgJlyyWWx0kO2M_Q/view?usp=drivesdk" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="hover:text-indigo-400 transition">Resume</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;