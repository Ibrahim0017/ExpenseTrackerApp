import React, { useState } from "react";
import InputAdmin from "../../components/EmployeeComponents/InputAdmin";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

const AdminSignin = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
    setVisiblePassword(!visiblePassword);
  };

  return (
    <div className="w-full flex justify-center items-center h-[100vh] ">
      <div className="w-full flex justify-center items-center">
        <form className="w-[70%]">
          <p>Logo</p>
          <h1 className="font-bold text-[30px] font-[calibri]">
            Welcome to DIU
          </h1>
          <p className="text-[17px] text-[#BBBEC8] font-[calibri]">
            Manage Expenses easily now
          </p>
          <div>
            <InputAdmin
              Title="Email"
              placeholder="Enter your email-address"
              type="email"
              required
            />
            <div className="mt-2 ">
              <label className=" w-full font-[calibri] font-medium text-[17px]">
                Password
              </label>
              <div className="w-full relative">
                <input
                  className="pl-[15px] w-full py-[9px] focus:outline-[#BBBEC8] font-[calibri] rounded-md border border-[#BBBEC8] mt-1"
                  type={visiblePassword ? "text" : "password"}
                  placeholder="Enter your password"
                  name="name"
                  required
                />
                <span
                  className="text-[20px] absolute bottom-[10px] right-4 text-[#a0a2a8] cursor-pointer"
                  onClick={handleOpen}
                >
                  {open ? <IoMdEye /> : <IoMdEyeOff />}
                </span>
              </div>
            </div>
          </div>
          <button className="w-full py-3 bg-blue-700 mt-3 font-medium text-white rounded-md">
            Create Account
          </button>
          <div className="flex gap-2 items-center mt-2">
            <p className="text-[14px] text-[#a0a2a8] ">
              Don't have an account?
            </p>{" "}
            <Link to="/admin">
              <p className="font-medium text-[15px] cursor-pointer">Register</p>
            </Link>
          </div>
        </form>
      </div>
      <div className="w-full h-full bg-green-500 max-sm:hidden"></div>
    </div>
  );
};

export default AdminSignin;
