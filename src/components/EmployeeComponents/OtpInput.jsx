import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { addOtpId } from "../../service/userReducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const OtpInput = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [focusIndex, setFocusIndex] = useState(0);
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const id = useSelector((state) => state.user_reducer?.otpId);
  console.log(id);

  const handleChange = (e, index) => {
    if (isNaN(e.target.value)) return false;

    setOtp([
      ...otp.map((data, indx) => (indx === index ? e.target.value : data)),
    ]);

    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };

  console.log(otp.join(""));

  const handleKeyDown = (e, index) => {
    if (e.target.value === "Backspace") {
      const newOtp = [...otp];
      newOtp[index] = "";
      setOtp(newOtp);
      if (index > 0) {
        setFocusIndex(index - 1);
      }

      if (e.target.value && e.target.nextSibling === "Backspace") {
        // e.target.nextSibling.focus()
        setFocusIndex(index - 1);
      }
    }
  };

  const handleSubmitOtp = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const otpHolder = otp?.join("")
    console.log(otpHolder)

    try {
      const res = await axios.patch(
        `https://expense-tracker-ruug.onrender.com/api/organisation/${id}`,
        { otp: otpHolder }
      );
      console.log(res)
      navigate("/adminsignin/");
      console.log(otpHolder);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full flex h-[100vh] justify-center">
      <form
        className="w-full h-full flex flex-col justify-center items-center"
        onSubmit={handleSubmitOtp}
      >
        <div className="w-[400px] h-[300px] border justify-center flex flex-col items-center">
          <p className="font-medium text-[17px]">Enter OTP code Here </p>
          <div className="mt-4">
            {otp.map((data, i) => (
              <input
                key={i}
                type="text"
                value={data}
                onChange={(e) => handleChange(e, i)}
                // onKeyDown={(e) => handleKeyDown(e, i)}
                maxLength={1}
                onKeyDown={(e) => handleKeyDown(e, i)}
                className={`w-12 h-12 text-center ml-4 border-2 rounded-md focus:border-gray-500 focus:outline-none ${
                  focusIndex === i ? " focus:ring-gray-500" : ""
                }`}
                autoFocus={focusIndex === i}
              />
            ))}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-[80%] py-3 bg-gray-800 mt-3 font-medium text-white rounded-md"
          >
            {isLoading ? "Loading..." : "Submit"}
          </button>
        </div>
      </form>
      <div className="w-full h-full bg-green-500 max-sm:hidden">juju</div>
    </div>
  );
};

export default OtpInput;
