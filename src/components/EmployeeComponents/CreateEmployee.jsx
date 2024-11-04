import React, { useState } from "react";
import { TbLetterX } from "react-icons/tb";

const CreateEmployee = ({ handleButtonOpen }) => {
  const data = [
    {branch : 'Agboju'},
    {branch : 'Alakija'},
    {branch : 'Ikotun'},
    {branch : 'Ijesha'},
    {branch : 'Ikorodu'},
  ]
  return (
    <>
    <div className="fixed inset-0 h-screen max-md:py-2 max-md:px-6 bg-bgTrans flex items-center justify-center max-md:z-50 ">
    <div className="w-[60%] h-[450px] bg-white border flex flex-col items-center pt-6 max-md:w-full max-md:h-full">
        <div className="w-full flex justify-center pb-3 max-md:pb-0  border-b border-[#BBBEC8] ">
          <div className="w-[95%]  flex justify-between">
            <div className="text-[20px] font-semibold">Add New Employee</div>
            <p
              className="text-[25px] text-[#c4c1c1] cursor-pointer"
              onClick={handleButtonOpen}
            >
              <TbLetterX />
            </p>
          </div>
        </div>
        <form className="w-[95%]">
          <div className="w-full flex justify-between gap-4 max-sm:flex-col mt-3">
            <div className="w-full">
              <p>First Name</p>
              <div>
                <input
                  type="text"
                  className="py-2 mt-1 focus:outline-[#BBBEC8] rounded-sm px-2 w-full border"
                />
              </div>
            </div>
            <div className="w-full">
              <p>Last Name</p>
              <div>
                <input
                  type="text"
                  className="py-2 mt-1 focus:outline-[#BBBEC8] rounded-sm px-2 w-full border"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between gap-4 max-sm:flex-col max-sm:mt-2">
            <div className="w-full">
              <p>Company Name</p>
              <div>
                <input
                  type="text"
                  className="py-2 mt-1 focus:outline-[#BBBEC8] rounded-sm px-2 w-full border"
                />
              </div>
            </div>
            <div className="w-full">
              <p>Phone Number</p>
              <div>
                <input
                  type="text"
                  className="py-2 mt-1 focus:outline-[#BBBEC8] rounded-sm px-2 w-full border"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-between gap-4 max-sm:flex-col max-sm:mt-2">
            <div className="w-full">
              <p>E-mail</p>
              <div className="w-full">
                <input
                  type="email"
                  className="py-2 mt-1 focus:outline-[#BBBEC8] rounded-sm px-2 w-full border"
                />
              </div>
            </div>
            <div className="w-full">
              <p>Branch</p>
              <div>
                
                  <select className="py-2 mt-1 focus:outline-[#BBBEC8] rounded-sm px-2 w-full border" >
                  {data.map((value) => (
                  <option>{value.branch}</option>
                ))}
                </select>
               
              </div>
            </div>
          </div>
          <div className="mt-3">
            <button className="px-4 py-[10px] border-none bg-gray-800  text-[17px] tetx-white font-semibold font-[calibri] rounded-md text-white">
             + Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default CreateEmployee;
