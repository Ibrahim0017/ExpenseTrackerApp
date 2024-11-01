import React from 'react';
import { Link } from 'react-router-dom';
import { FiHome } from 'react-icons/fi'; // Import an icon

const SelectMenu = ({ text, path, Icon = FiHome }) => { // Use Icon as a prop with a default
  return (
    <Link to={path}>
      <div className="w-full h-9 rounded-lg py-1 px-2 mt-3 flex items-center text-gray-800 font-semibold cursor-pointer transition-all duration-300 ease-in-out transform hover:bg-blue-400 hover:text-white hover:translate-x-2">
        <Icon className="mr-2" /> {/* Render the icon */}
        {text}
      </div>
    </Link>
  );
};

export default SelectMenu;

