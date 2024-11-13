import React, { useState, useEffect } from 'react';
import { LuBellRing } from "react-icons/lu";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useAdminProfileQuery } from '../service/AdminProfile/AdminProfileRTK';

const Header = () => {
  const [isProfilePopupVisible, setIsProfilePopupVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState(''); // Define currentDate state
  const tokenHolder = useSelector((state) => state.user_reducer?.users);

  const { data, error, isLoading } = useAdminProfileQuery();
  console.log(data);
  console.log(error);

  // Set current date on component load
  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setCurrentDate(formattedDate); // Set currentDate state
  }, []);
  useEffect(() => {
      data;
  }, []);

  // Toggle profile popup
  const toggleProfilePopup = () => {
    setIsProfilePopupVisible(!isProfilePopupVisible);
  };

  return (
    <div className='w-full md:w-[85%] h-[10%] bg-gray-900 border-gray-700 border-b flex justify-between px-3 fixed right-0 z-20'>
      <div className='h-[100%] flex gap-2 items-center cursor-pointer' onClick={toggleProfilePopup}>
        <div className='w-8 h-8 bg-slate-400 rounded-full flex justify-center items-center'>
          {data?.data.avatar ? (
            <img src={data?.data.avatar} className='w-8 h-8 bg-slate-400 rounded-full' />
          ) : (
            <p>{data?.data.fullName.charAt(0).toUpperCase()}</p>
          )}
        </div>
        <div>
          <div className='text-sm md:text-base text-white'>
            {data ? data?.data.fullName.toUpperCase() : 'Updating...'}
          </div>
          <div className='text-xs md:text-sm text-gray-50'>Hello, Welcome back</div>
        </div>
      </div>

      <div className='h-[100%] flex items-center gap-3'>
        <input
          type='text'
          className='h-8 w-24 md:w-32 lg:w-40 p-2 rounded-sm outline-none'
          placeholder='Search'
          aria-label='Search'
        />
      </div>

      {isProfilePopupVisible && data?.data && (
        <div className='absolute top-12 left-1/2 transform -translate-x-1/2 w-[90%] md:max-w-lg bg-white rounded-lg shadow-2xl p-6 z-30'>
          <div className='text-gray-800 font-semibold text-lg mb-4'>User Profile</div>
          <p className='my-4'>Hello, {data.data.fullName.toUpperCase()}! Here’s your account summary:</p>
          <div className='flex gap-4'>
            <div className='w-16 h-16 md:w-24 md:h-24 bg-slate-400 rounded-full'>
              {data?.data.avatar ? (
                <img src={data?.data.avatar} className='w-full h-full rounded-full' />
              ) : (
                <p>{data?.data.firstName?.charAt(0).toUpperCase()}{data?.data.lastName?.charAt(0).toUpperCase()}</p>
              )}
            </div>
            <div>
              <div className='text-gray-800 font-semibold text-md:text-base'>
                {data.data.fullName.toUpperCase()}
              </div>
              <div className='text-gray-500 text-xs md:text-sm'>{data.data.email}</div>
              <div className='text-gray-500 text-xs md:text-sm'>Date: {currentDate}</div>
            </div>
          </div>
          <div className='mt-4'>
            <button
              onClick={toggleProfilePopup}
              className='w-full text-white bg-blue-500 hover:bg-red-600 text-sm py-2 rounded-md'
            >
              Close Profile
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
