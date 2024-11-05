import React from 'react';

const StatsCard = ({ title, value, bgGradient, margin }) => {
  return (
    <div className={`flex flex-col justify-center w-full items-start p-6 rounded-lg shadow-lg ${margin} text-white ${bgGradient}`}>
      <h2 className="text-sm sm:text-base lg:text-lg font-semibold mb-2">{title}</h2>
      <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">{value}</p>
    </div>
  );
};

export default StatsCard;

