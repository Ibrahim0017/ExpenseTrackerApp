import React, { useState, useEffect } from 'react';
import { LuBellRing } from "react-icons/lu";
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useAdminProfileQuery } from '../service/AdminProfile/AdminProfileRTK'

const Header = () => {
  const [isNotificationPopupVisible, setIsNotificationPopupVisible] = useState(false);
  const [isProfilePopupVisible, setIsProfilePopupVisible] = useState(false);
  const [profileData, setProfileData] = useState(null);
  const tokenHolder = useSelector((state) => state.user_reducer?.users);


  const { data, error, isLoading } = useAdminProfileQuery()
  console.log(data)
  console.log(error)

  // Fetch latest profile data
  // const fetchProfileData = async () => {
  //   try {
  //     const res = await axios.get(
  //       'https://expense-tracker-ruug.onrender.com/api/employee/profile', // Replace with your actual endpoint
  //       {
  //         headers: {
  //           Authorization: `Bearer ${tokenHolder}`,
  //         },
  //       }
  //     );
  //     console.log('Profile data response:', res.data); // Check the API response in the console
  //     setProfileData(res.data.data); // Assuming res.data contains the profile data
  //   } catch (error) {
  //     console.error('Error fetching profile data:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchProfileData();
  // }, []);

  // Toggle notification popup
  const toggleNotificationPopup = () => {
    setIsNotificationPopupVisible(!isNotificationPopupVisible);
  };

  // Toggle profile popup
  const toggleProfilePopup = () => {
    setIsProfilePopupVisible(!isProfilePopupVisible);
  };

  return (
    <div className='w-full md:w-[85%] h-[10%] bg-gray-900 border-gray-700 border-b flex justify-between px-3 fixed right-0 z-20'>
      <div className='h-[100%] flex gap-2 items-center cursor-pointer' onClick={toggleProfilePopup}>
        <div className='w-8 h-8 bg-slate-400 rounded-full flex justify-content-center align-items-center'>
          {data.data.avatar? (
            <img src={data?.data.avatar} className='w-8 h-8 bg-slate-400 rounded-full' />

          )
          : <p>{data?.data.fullName.chartAt().toUpperCase}</p>
          }
        </div>
        <div>
          <div className='text-sm md:text-base text-white'>
            {data ? data?.data.fullName.toUpperCase() : 'Loading...'}
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
        <div
          className='flex gap-2 items-center bg-gray-600 p-1 rounded-md text-xs md:text-sm cursor-pointer hover:bg-gray-500 transition-colors'
          onClick={toggleNotificationPopup}
          aria-label='Notifications'
        >
          <div className='text-white text-lg'>
            <LuBellRing />
          </div>
          <div className='bg-gradient-to-r from-green-400 to-green-600 rounded-sm p-1 text-[10px] text-white'>2 New</div>
        </div>
      </div>

      {/* Notification Popup */}
      {isNotificationPopupVisible && (
        <div className='absolute top-12 right-4 w-60 md:w-72 bg-white rounded-lg shadow-lg p-4 z-30'>
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
      {isProfilePopupVisible && profileData && (
        <div className='absolute top-12 left-1/2 transform -translate-x-1/2 w-[90%] md:max-w-lg bg-white rounded-lg shadow-2xl p-6 z-30'>
          <div className='text-gray-800 font-semibold text-lg mb-4'>User Profile</div>
          <div className='flex gap-4'>
            <div className='w-16 h-16 md:w-24 md:h-24 bg-slate-400 rounded-full'></div>
            <div>
              <div className='text-gray-800 font-semibold text-md:text-base'>
                {profileData.firstName} {profileData.lastName}
              </div>
              <div className='text-gray-500 text-xs md:text-sm'>{profileData.email}</div>
              <div className='text-gray-500 text-xs md:text-sm'>Joined: {profileData.joinDate}</div>
            </div>
          </div>
          <div className='mt-4 text-gray-700 text-sm'>
            <p>Hello, {profileData.firstName}! Here’s your account summary:</p>
            <ul className='list-disc list-inside mt-2'>
              <li>Membership: {profileData.membershipStatus}</li>
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
    </div>
  );
};

export default Header;
