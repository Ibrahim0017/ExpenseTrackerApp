import React, { useState, useEffect, useRef } from 'react';
import { LuBellRing } from "react-icons/lu";
import { useSelector } from 'react-redux';
import { useEmployeeProfileQuery } from '../../service/employee/EmployeesProfileRTK';
import { IoIosMenu } from "react-icons/io";
import SelectMenu from "../../components/SelectMenu";
import { FiHome, FiSettings } from "react-icons/fi"; // Importing necessary icons
import { User2Icon } from "lucide-react";
import { IoGitBranchOutline } from 'react-icons/io5';

const EmployeesHeader = () => {
  const [isNotificationPopupVisible, setIsNotificationPopupVisible] = useState(false);
  const [isProfilePopupVisible, setIsProfilePopupVisible] = useState(false);
  const [currentDate, setCurrentDate] = useState('');

  const tokenHolder = useSelector((state) => state.user_reducer?.users);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // Toggle menu open/close
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close the menu when clicking outside
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };
  console.log(isMenuOpen)
  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Cleanup the event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);
  const { data, error, isLoading } = useEmployeeProfileQuery();

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    setCurrentDate(formattedDate);
  }, []);

  const toggleProfilePopup = () => {
    setIsProfilePopupVisible(!isProfilePopupVisible);
  };

  return (
    <div className='w-full md:w-[85%] h-[10%] bg-gray-900 border-gray-700 border-b flex justify-between px-3 fixed right-0 z-20'>
      <div className='h-[100%] flex gap-2 items-center cursor-pointer' onClick={toggleProfilePopup}>
        <div className='w-8 h-8 bg-slate-400 rounded-full flex justify-center items-center'>
          {data?.data.avatar ? (
            <img src={data?.data.avatar} className='w-8 h-8 rounded-full object-fit-cover' />
          ) : (
            <p>{data?.data.lastName?.charAt(0).toUpperCase()}{data?.data.firstName?.charAt(0).toUpperCase()}</p>
          )}
        </div>
        <div>
          <div className='text-sm mobileTab:text-[12px] md:text-base text-white'>
            {data ? `${data?.data.firstName.toUpperCase()} ${data?.data.lastName.toUpperCase()}` : 'Loading...'}
          </div>
          <div className='text-xs md:text-sm text-gray-50'>Hello, Welcome back</div>
        </div>
      </div>

      <div className='flex gap-3'>
      <div className='h-[100%] flex items-center gap-3'>
        <input
          type='text'
          className='h-8 w-24 md:w-32 lg:w-40 p-2 rounded-sm outline-none'
          placeholder='Search'
          aria-label='Search'
        />
      </div>
      <div className='text-white cursor-pointer text-3xl items-center hidden mobileTab:flex ' onClick={toggleMenu}>
      <IoIosMenu />
      </div>
      </div>

      {isProfilePopupVisible && data?.data && (
        <div className='absolute top-12 left-1/2 transform -translate-x-1/2 w-[90%] md:max-w-lg bg-white rounded-lg shadow-2xl p-6 z-30'>
          <div className='text-gray-800 font-semibold text-lg mb-4'>User Profile</div>
          <div className='my-4 text-gray-700 text-sm'>
            <p>Hello, {data.data.firstName.toUpperCase()}! Here’s your account summary:</p>
          </div>
          <div className='flex gap-4'>
            <div className='w-16 h-16 md:w-24 md:h-24 bg-slate-400 rounded-full flex justify-center items-center'>
              {data?.data.avatar ? (
                <img src={data?.data.avatar} className='w-full h-[100%] rounded-full' />
              ) : (
                <p className='text-[20px]'>{data?.data.lastName?.charAt(0).toUpperCase()}{data?.data.firstName?.charAt(0).toUpperCase()}</p>
              )}
            </div>
            <div>
              <div className='text-gray-800 font-semibold text-md:text-base'>
                {data.data.firstName.toUpperCase()} {data.data.lastName.toUpperCase()}
              </div>
              <div className='text-gray-500 text-xs md:text-sm'>{data.data.email}</div>
              <div className='text-gray-500 text-xs md:text-sm'>Date: {currentDate}</div>
              <div className='flex items-center gap-2'>
                <h4 className='text-xs md:text-sm text-gray-500'>Active:</h4>
                <div className='w-[10px] h-[10px] rounded-full bg-green-500 mt-[3px]'></div>
              </div>
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
      {
        isMenuOpen && (
          <div className='absolute top-16 left-[100px] flex-col transform hidden -translate-x-1/2 w-[200px] mobileTab:max-w-lg mobileTab:flex bg-white rounded-lg shadow-2xl p-6 z-30 h-[100vh]' ref={menuRef}>
          <h1 className="text-[14px]">Menu</h1>
      <SelectMenu text='Dashboard' path='/employeesdash/expense' Icon={FiHome} />
      <SelectMenu text='Profile' path='/employeesdash/myprofile' Icon={User2Icon} />
      {/* <SelectMenu text='Profile' path='/employeesdash/profile' Icon={FiHome} />
      <SelectMenu text='Attendance' path='/employeesdash/attendance' Icon={FiHome} />
      <SelectMenu text='Payroll' path='/employeesdash/payroll' Icon={FiHome} />
      <SelectMenu text='Reports' path='/employeesdash/reports' Icon={FiHome} /> */}
      <h1 className='text-[14px]'>Support</h1>
      <SelectMenu text='Settings' path='/employeesdash/emsettings' Icon={FiSettings} />
          </div>
        )
      }
    </div>
  );
};

export default EmployeesHeader;
