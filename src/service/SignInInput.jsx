import { useState } from 'react'
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

const SignInInput = () => {
  const [Open, setOpen] =useState(false)

  //handle toggle button
  const toggle = () => {
    setOpen(!Open)
  }

  return (
    <div className='w-[50%] h-full py-[30px] outline-none gap-6 flex flex-col items-center justify-around'>
           <div className='w-[76%]'>
          <div className='font-semibold'>eXpenseTracker</div>
          </div>
        <form action="" className='w-[90%] h-full flex items-center justify-center'>
       
          <div className='w-[85%] flex flex-col '> <div className='font-semibold text-2xl flex-wrap'>Get Started with eXpenseTracker</div>
            <div className='flex-wrap'>Welcome back, please fill in your details!</div>
          <div className='mt-[20px] flex flex-col gap-4'>

            <div className='flex flex-col gap-1'>
                <label id="name" className='text-[14px] font-medium'>Email</label>
               <div className='w-full'>
               <input type="text" placeholder='Enter email' className='w-full border-gray-500  border outline-none py-2 text-[14px] pl-[10px] rounded-[5px] shadow-sm' />

               </div>
            </div>

            <div className='flex justify-center flex-col gap-1'>
                <label id="name" className='text-[14px] font-medium w-full'>Password</label>
               <div className=' flex items-center '>
               <input type={(Open === false)? 'password' : 'text'} placeholder='Enter password' className='w-full border border-gray-500 rounded-[5px] shadow-sm py-2 text-[14px] pl-[10px] ' />
               </div>

               <div className='flex absolute right-20 bottom-52 text-[18px] cursor-pointer mb-[3px]'>
                {
                  (Open === false) ? <IoIosEye onClick={toggle}/> : <IoIosEyeOff onClick={toggle}/>
                }
               </div>
          
            </div>
            <button className='w-full py-2 rounded-[5px] bg-slate-800 hover:bg-slate-900 text-white text-[14px] font-medium'>Sign In</button>

                <div className='text-[14px] flex flex-wrap'> Don't have an account? <div className='cursor-pointer font-medium text-[14px] ml-1'>Sign Up</div></div> 

          </div>
            
            </div>
        </form>
    </div>
  )
}

export default SignInInput