import { useState } from "react";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useSignInEmployeeMutation } from "./employee/EmployeeRTK";
import { useDispatch } from "react-redux";
import { UserLogin } from "./userReducer";

const SignInInput = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [verify, { data, error, isLoading, isSuccess }] =
    useSignInEmployeeMutation();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const signIn = (e) => {
    e.preventDefault();
    verify(values);
  };

  console.log(values);
  if (isSuccess) {
    navigate("/employeesdash");
    dispatch(UserLogin(data.data));
  }
  if (error) {
    console.log(error);
  }
  const [Open, setOpen] = useState(false);

  //handle toggle button
  const toggle = () => {
    setOpen(!Open);
  };

  return (
    <div className="w-[50%] tablet:w-full h-full py-[30px] outline-none gap-6 flex flex-col items-center justify-around ">
      <div className="w-[76%]">
        <div className="font-semibold">eXpenseTracker</div>
      </div>
      <form
        action=""
        onSubmit={signIn}
        className="w-[90%] h-full flex items-center justify-center"
      >
        <div className="w-[85%] flex flex-col ">
          {" "}
          <div className="font-semibold text-2xl flex-wrap">
            Get Started with eXpenseTracker
          </div>
          <div className="flex-wrap">
            Welcome back, please fill in your details!
          </div>
          <div className="mt-[20px] flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label id="name" className="text-[14px] font-medium">
                Email
              </label>
              <div className="w-full">
                <input
                  onChange={handleChange}
                  name="email"
                  type="text"
                  placeholder="Enter email"
                  className="w-full border-gray-500  border outline-none py-2 text-[14px] pl-[10px] rounded-[5px] shadow-sm"
                />
              </div>
            </div>

            <div className="flex justify-center flex-col gap-1">
              <label id="name" className="text-[14px] font-medium w-full">
                Password
              </label>
              <div className=" flex items-center ">
                <input
                  onChange={handleChange}
                  name="password"
                  type={Open === false ? "password" : "text"}
                  placeholder="Enter password"
                  className="w-full border border-gray-500 rounded-[5px] shadow-sm py-2 text-[14px] pl-[10px] "
                />
              </div>

              <div className="flex absolute right-20 bottom-52 text-[18px] cursor-pointer mb-[3px]">
                {Open === false ? (
                  <IoMdEye onClick={toggle} />
                ) : (
                  <IoMdEyeOff onClick={toggle} />
                )}
              </div>
            </div>
            <button
              disabled={isLoading}
              className="w-full py-2 rounded-[5px] bg-slate-800 hover:bg-slate-900 text-white text-[14px] font-medium"
            >
              {isLoading ? "Loading..." : "Sign In"}
            </button>

            <div className="text-[14px] flex items-center flex-wrap">
              {" "}
              Don't have an account?{" "}
              <Link to="/signUp">
                <div className="cursor-pointer font-medium text-[14px] ml-1">
                  Sign Up
                </div>
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignInInput;
