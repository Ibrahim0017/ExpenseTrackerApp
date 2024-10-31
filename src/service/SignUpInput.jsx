import React from 'react'

const SignUpInput = () => {
  return (
    <div className='w-[50%] h-full py-[30px] gap-6 flex flex-col items-center justify-around'>
           <div className='w-[76%]'>
          <div className='font-semibold'>eXpenseTracker</div>
          </div>
        <form action="" className='w-[90%] h-full flex items-center justify-center'>
       
          <div className='w-[85%] flex flex-col '> <div className='font-semibold text-2xl'>Get Started with eXpenseTracker</div>
            <div>Welcome back, please fill in your details!</div>
          <div className='mt-[20px] flex flex-col gap-4'>
          <div className='flex flex-col gap-1'>
                <label id="name" className='text-[14px] font-medium'>OTP</label>
               <div className='w-full'>
               <input type="number" placeholder='Enter OTP' className='w-full border-gray-500  border outline-none py-2 text-[14px] pl-[10px] rounded-[5px] shadow-sm' />
               </div>
            </div>

            <div className='flex flex-col gap-1'>
                <label id="name" className='text-[14px] font-medium'>Email</label>
               <div className='w-full'>
               <input type="text" placeholder='Enter email' className='w-full border-gray-500  border outline-none py-2 text-[14px] pl-[10px] rounded-[5px] shadow-sm' />
               </div>
            </div>

            <div className='flex flex-col gap-1'>
                <label id="name" className='text-[14px] font-medium'>Password</label>
               <div className='w-full'>
               <input type="password" placeholder='Enter password' className='w-full border-gray-500  border outline-none py-2 text-[14px] pl-[10px] rounded-[5px] shadow-sm' />
               </div>
            </div>
            <button className='w-full py-2 rounded-[5px] bg-slate-800 text-white text-[14px] font-medium'>Create Account</button>

                <div className='text-[14px] flex'>Already have an account? <div className='cursor-pointer font-medium text-[14px] ml-1'>Login Here</div></div> 

          </div>
            
            </div>
        </form>
    </div>
  )
}

export default SignUpInput