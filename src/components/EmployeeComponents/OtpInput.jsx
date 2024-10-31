import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOtpId } from "../../service/userReducer";
import axios from "axios";


const OtpInput = () => {
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [focusIndex, setFocusIndex] = useState(0);
  const dispatch = useDispatch()
  const id = useSelector(state => state.addOtpId)
  console.log(id)


  const handleChange = (e, index) => {

    if (isNaN(e.target.value)) return false;
    
    setOtp([...otp.map((data, indx) => (indx === index? e.target.value : data))])

    if(e.target.value && e.target.nextSibling){
      e.target.nextSibling.focus()
    }

  }

  const handleKeyDown = (e, index) => {
    if (e.target.value === 'Backspace') {
      const newOtp = [...otp];
      newOtp[index] = '';
      setOtp(newOtp);
      if (index > 0) {
        setFocusIndex(index - 1);
      }

      if(e.target.value && e.target.nextSibling === 'Backspace'){
        // e.target.nextSibling.focus()
        setFocusIndex(index - 1);
      }
    }
  };

  const handleSubmitOtp = async(e) =>{
    e.prevent.default()

    try {
      const OTP = await axios.path(`https://expense-tracker-ruug.onrender.com/api/organisation/${id}`, otp)
      console.log(OTP.data.data)
      dispatch(addOtpId.data.data)
      
      
    } catch (error) {
      console.log(error)
    }
  }
 


  return (
    <div className="w-full flex justify-center">
      <form className="w-full flex flex-col justify-center items-center" onSubmit={handleSubmitOtp}>
    <div>
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
            focusIndex === i ? ' focus:ring-gray-500' : ''
          }`}
          autoFocus={focusIndex === i}
        />
      ))}
    </div>

      <button type="submit" className="mt-4 w-[150px] px-4 py-[10px] border-none bg-gray-800  text-[17px] tetx-white font-semibold font-[calibri] rounded-md text-white">Submit</button>
      </form>
      <div className="w-full h-full bg-green-500 max-sm:hidden">juju</div>
    </div>
  );
};

export default OtpInput;

