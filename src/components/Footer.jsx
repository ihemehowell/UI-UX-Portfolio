// Footer.jsx
import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="text-center py-8 text-gray-500 text-sm border-t border-[#1a1a1a]">
      <div className="flex justify-center space-x-10 mb-4">
        <a href="https://twitter.com/howell" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaTwitter className="text-2xl" />
        </a>
        <a href="https://github.com/howell" target="_blank" rel="noopener noreferrer" className="hover:text-white">
          <FaGithub className="text-2xl" />
        </a>
        <a href="https://linkedin.com/in/howell" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
          <FaLinkedin className="text-2xl" />
        </a>
      </div>
      <p>© 2025 Howell. Designed & built with ❤️</p>
    </footer>
  );
};

export default Footer;