import React, { useState } from "react";
import InputAdmin from "../../components/EmployeeComponents/InputAdmin";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import useForm from "../../handler/useForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addOtpId } from "../../service/userReducer";
import imageA from '../../assets/2d35b83df65a5b188eed0847f0cabdc5.jpg'
 

const AdminSignup = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { handleChange, values, errors } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch()


  console.log(errors);
  console.log(values);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(async () => {
      try { 
        let res = await axios.post("https://expense-tracker-ruug.onrender.com/api/organisation/register", values)
        setIsLoading(res.values)
        console.log(res)
        navigate("otpinput/");
        console.log(res.data.data)
        dispatch(addOtpId(res.data.data))
        
      } catch (error) {
        console.log(error)
      }
    })
  };
  console.log(isLoading);

  const [visiblePassword, setVisiblePassword] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    setVisiblePassword(!visiblePassword);
  };

 

  return (
    <div className="w-full flex justify-center items-center h-[100vh] ">
      <div className="w-full flex justify-center items-center">
        <form className="w-[70%]" onSubmit={handleSubmit}>
          <p>Logo</p>
          <h1 className="font-bold text-[30px] font-[calibri]">
            Get Started with DIU
          </h1>
          <p className="text-[17px] text-[#BBBEC8] font-[calibri]">
            Manage Expenses easily now
          </p>
          <div>
            <InputAdmin
              Title="Full Name"
              placeholder="Enter your full-name"
              type="text"
              name="fullName"
              handleChange={handleChange}
              error={errors?.fullName}
            />
            <InputAdmin
              Title="Company Name"
              name="companyName"
              placeholder="Enter your company-name"
              type="text"
              required
              handleChange={handleChange}
            />
            <InputAdmin
              Title="Phone Number"
              placeholder="Enter your phone-number"
              type="text"
              handleChange={handleChange}
              name="phone"
              error={errors?.phoneNumber}
            />
            <InputAdmin
              Title="Email"
              placeholder="Enter your email-address"
              name="email"
              type="email"
              handleChange={handleChange}
              required
            />
            {/* password Input */}
            <div className="mt-2 ">
              <label className=" w-full font-[calibri] font-medium text-[17px]">
                Password
              </label>
              <div className="w-full relative">
                <input
                  onChange={handleChange}
                  
                  className="pl-[15px] w-full py-[9px] focus:outline-[#BBBEC8] font-[calibri] rounded-md border border-[#BBBEC8] mt-1"
                  type={visiblePassword ? "text" : "password"}
                  placeholder="Enter your password"
                  name="password"
                  required
                />
                <span
                  className="text-[20px] absolute bottom-[10px] right-4 text-[#a0a2a8] cursor-pointer"
                  onClick={handleOpen}
                >
                  {open ? <IoMdEye /> : <IoMdEyeOff />}
                </span>
              </div>
              {/* {errors && <div className='text-red-500 text-[12px]'>{errors} </div>} */}
            </div>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-gray-800 mt-3 font-medium text-white rounded-md"
          >
            {isLoading ? "Loading..." : "Create Account"}
          </button>
          <div className="flex gap-3 items-center mt-2">
            <p className="text-[14px] text-[#a0a2a8] ">
              Already have an account?
            </p>{" "}
            <Link to="/adminsignin ">
              <p className="font-medium text-[15px] cursor-pointer">
                Login Here
              </p>
            </Link>
          </div>
        </form>
      </div>
      <div className="w-full h-full max-sm:hidden">
      <img src={imageA} className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default AdminSignup;
