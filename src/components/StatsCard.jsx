
import React from 'react';

const StatsCard = ({ title, value, bgGradient }) => {
  return (
    <div className={`flex flex-col justify-center w-[32%] items-start p-6 rounded-lg shadow-lg text-white ${bgGradient}`}>
      <h2 className="text-sm font-semibold mb-2">{title}</h2>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
};

export default StatsCard;
