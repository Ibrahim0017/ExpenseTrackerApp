import React, { useState } from "react";
import InputAdmin from "../../components/EmployeeComponents/InputAdmin";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";
import imageA from '../../assets/713a2f0c10b357e06b85162bdbb9d783.jpg'
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserLogin } from "../../service/userReducer";
import useForm from "../../handler/useForm";
import Swal from 'sweetalert2'

const AdminSignin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { handleChange, values, errors } = useForm();
  const [visiblePassword, setVisiblePassword] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleOpen = () => {
    setOpen(!open);
    setVisiblePassword(!visiblePassword);
  };
  console.log(values);
  console.log(errors);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout( async() => {
      try { 
        let res = await axios.post("https://expense-tracker-ruug.onrender.com/api/organisation/login", values)
        setIsLoading(res.values)
        console.log(res)
      
        navigate("/admin/admin_dashboard");
        dispatch(UserLogin(res.data.data))
        setIsLoading(false)
        Swal.fire({
          title: "Successful!",
          text: "Welcome to Xpense Traka",
          icon: "success"
        });
        
      } catch (error) {
        console.log("error", error)
        setIsLoading(false)
        Swal.fire({
          title: "Failed!",
          text: "Incorrect e-mail or password",
          icon: "error"
        });
      }
    })
  };

  return (
    <div className="w-full flex justify-center items-center h-[100vh] ">
      <div className="w-full flex justify-center items-center">
        <form className="w-[70%]" onSubmit={handleSubmit}>
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
              name="email"
              handleChange={handleChange}
              required
            />
            <div className="mt-2 w-full ">
              <label className=" w-full font-[calibri] font-medium text-[17px]">
                Password
              </label>
              <div className="w-full relative flex items-center">
                <input
                  className="pl-[15px] w-full py-[9px] focus:outline-[#BBBEC8] font-[calibri] rounded-md border border-[#BBBEC8] mt-1"
                  type={visiblePassword ? "text" : "password"}
                  placeholder="Enter your password"
                  name="password"
                  onChange={handleChange}
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
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-gray-800 mt-3 font-medium text-white rounded-md"
          >
            {isLoading ? "Loading..." : "Login"}
          </button>
          <div className="flex gap-2 items-center mt-2">
            <p className="text-[14px] text-[#a0a2a8] ">
              Don't have an account?
            </p>{" "}
            <Link to="/adminsignup">
              <p className="font-medium text-[15px] cursor-pointer">Register</p>
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

export default AdminSignin;
