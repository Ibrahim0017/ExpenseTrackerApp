import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi';

const SelectMenu = ({ text, path, Icon = FiHome }) => {
  return (
    <Link to={path}>
      <div className="w-full h-9 rounded-lg py-1 px-2 mt-3 flex items-center justify-center md:justify-start text-gray-800 font-semibold cursor-pointer transition-all duration-300 ease-in-out transform hover:bg-blue-400 hover:text-white hover:translate-x-2">
        <Icon className="text-xl" /> {/* Center icon */}
        <span className="hidden md:inline ml-2">{text}</span> {/* Hide text on small screens */}
      </div>
    </Link>
  );
};

export default SelectMenu;
