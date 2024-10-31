import React, { useState } from 'react';
import { LuBellRing } from "react-icons/lu";
import { Link } from 'react-router-dom';
import Profile from '../pages/Admin Pages/Profile';

const Header = () => {
  const [isNotificationPopupVisible, setIsNotificationPopupVisible] = useState(false);
  const [isProfilePopupVisible, setIsProfilePopupVisible] = useState(false);
  const [isEditProfilePopupVisible, setIsEditProfilePopupVisible] = useState(false);

  // Toggle notification popup
  const toggleNotificationPopup = () => {
    setIsNotificationPopupVisible(!isNotificationPopupVisible);
  };

  // Toggle profile popup
  const toggleProfilePopup = () => {
    setIsProfilePopupVisible(!isProfilePopupVisible);
  };

  const toggleEditProfilePopup = () => {
    setIsEditProfilePopupVisible(!isEditProfilePopupVisible);
  };

  return (
    <div className='w-[85%] h-[10%] bg-gray-900 border-grey border flex justify-between px-3 fixed right-0 z-20'>
      <div className='h-[100%] flex gap-2 items-center cursor-pointer' onClick={toggleProfilePopup}>
        <div className='w-8 h-8 bg-slate-400 rounded-full'></div>
        <div>
          <div className='text-[16px] text-white'>Ibrahim Shobo</div>
          <div className='text-[11px] text-gray-50'>Hello, Welcome back</div>
        </div>
      </div>
      <div className='h-[100%] flex items-center gap-3'>
        <input
          type='text'
          className='h-[32px] p-2 rounded-sm outline-none'
          placeholder='Search'
          aria-label='Search'
        />
        <div
          className='flex gap-2 items-center bg-gray-600 p-1 rounded-md text-[12px] cursor-pointer hover:bg-gray-500 transition-colors'
          onClick={toggleNotificationPopup}
          aria-label='Notifications'
        >
          <div className='text-white text-[15px]'>
            <LuBellRing />
          </div>
          <div className='bg-green-400 rounded-sm p-1 text-[10px] text-white'>2 New</div>
        </div>
      </div>

      {/* Notification Popup */}
      {isNotificationPopupVisible && (
        <div className='absolute top-12 right-4 w-60 bg-white rounded-lg shadow-lg p-4 z-30'>
          <div className='text-gray-800 font-semibold mb-2'>Notifications</div>
          <ul className='text-gray-600 text-sm'>
            <li className='mb-1'>You have a new message</li>
            <li className='mb-1'>Your profile was updated</li>
            <li>System maintenance scheduled</li>
          </ul>
          <button
            onClick={toggleNotificationPopup}
            className='mt-4 w-full text-white bg-blue-500 hover:bg-blue-600 text-sm py-2 rounded-md'
          >
            Close
          </button>
        </div>
      )}

      {/* Profile Popup */}
      {isProfilePopupVisible && (
        <div className='absolute top-12 left-1/2 transform -translate-x-1/2 w-[90%] max-w-lg bg-white rounded-lg shadow-2xl p-6 z-30'>
          <div className='text-gray-800 font-semibold text-lg mb-4'>User Profile</div>
          <div className='flex gap-4'>
            <div className='w-24 h-24 bg-slate-400 rounded-full'></div>
            <div>
              <div className='text-gray-800 font-semibold'>Ibrahim Shobo</div>
              <div className='text-gray-500'>ibrahim.shobo@example.com</div>
              <div className='text-gray-500'>Joined: January 2023</div>
            </div>
          </div>
          <div className='mt-4 text-gray-700'>
            <p>Hello, Ibrahim! Here’s your account summary:</p>
            <ul className='list-disc list-inside mt-2'>
              <li>Membership: Premium</li>
              <li>Notifications Enabled: Yes</li>
              <li>2 New Messages</li>
            </ul>
          </div>
          <div className='mt-4'>
            <button
              onClick={toggleProfilePopup}
              className='w-full text-white bg-blue-500 hover:bg-blue-600 text-sm py-2 rounded-md'
            >
              Close Profile
            </button>
          </div>
        </div>
      )}
      {/* <Profile /> */}
    </div>
  );
}

export default Header;
