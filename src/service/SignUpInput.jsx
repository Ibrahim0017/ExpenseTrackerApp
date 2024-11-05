import { useState } from "react";
import { useSignUpEmployeeMutation } from "./employee/EmployeeRTK";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const SignUpInput = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    otp:'',
    email:'',
    password:''
  });
  const [verify, { data, error, isLoading, isSuccess }] =
    useSignUpEmployeeMutation();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const signUp = (e) => {
    e.preventDefault();
    verify(values);
  };

  console.log(values)
  if (isSuccess) {
    navigate("/signIn");
  }
  if (error) {
    console.log(error);
  }
  return (
    <div className="w-[50%] h-full py-[30px] gap-6 flex flex-col items-center justify-around tablet:w-full">
      <div className="w-[76%]">
        <div className="font-semibold">eXpenseTracker</div>
      </div>
      <form
        action=""
        onSubmit={signUp}
        className="w-[90%] h-full flex items-center justify-center"
      >
        <div className="w-[85%] flex flex-col ">
          {" "}
          <div className="font-semibold text-2xl">
            Get Started with eXpenseTracker
          </div>
          <div>Welcome back, please fill in your details!</div>
          <div className="mt-[20px] flex flex-col gap-4">
            <div className="flex flex-col gap-1">
              <label id="name" className="text-[14px] font-medium">
                OTP
              </label>
              <div className="w-full">
                <input
                  type="number"
                  onChange={handleChange}
                  placeholder="Enter OTP"
                  name='otp'
                  className="w-full border-gray-500  border outline-none py-2 text-[14px] pl-[10px] rounded-[5px] shadow-sm"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label id="name" className="text-[14px] font-medium">
                Email
              </label>
              <div className="w-full">
                <input
                  type="text"
                  onChange={handleChange}
                  placeholder="Enter email"
                  name="email"
                  className="w-full border-gray-500  border outline-none py-2 text-[14px] pl-[10px] rounded-[5px] shadow-sm"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1">
              <label id="name" className="text-[14px] font-medium">
                Password
              </label>
              <div className="w-full">
                <input
                  type="password"
                  onChange={handleChange}
                  placeholder="Enter password"
                  name="password"
                  className="w-full border-gray-500  border outline-none py-2 text-[14px] pl-[10px] rounded-[5px] shadow-sm"
                />
              </div>
            </div>
            <button disabled={isLoading} className="w-full py-2 rounded-[5px] bg-slate-800 text-white text-[14px] font-medium">
              {isLoading? 'Loading...': 'Create Account'}
            </button>
       

            <div className="text-[14px] flex">
              Already have an account?{" "}
              <Link to="/signIn">
              <div className="cursor-pointer font-medium text-[14px] ml-1">
                Login Here
              </div>
          </Link>
          
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUpInput;
