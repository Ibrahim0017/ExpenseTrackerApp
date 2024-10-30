import React from 'react';
import { Link } from 'react-router-dom';

const SelectMenu = ({ text,path }) => {
  return (
 <Link to={path} >
    <div className="w-full h-9 rounded-lg py-1 px-2 mt-3 text-gray-800 font-semibold cursor-pointer transition-all duration-300 ease-in-out transform hover:bg-blue-400 hover:text-white hover:translate-x-2">
      {text}
    </div></Link>
  );
};

export default SelectMenu;
