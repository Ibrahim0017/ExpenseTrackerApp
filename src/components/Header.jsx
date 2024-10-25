import React from 'react'


const Header = () => {
  return (
    <div className='w-full h-16 bg-gray-900 border-grey border flex justify-between px-3'>
        <div className='h-[100%] flex gap-2 items-center'>
          <div className='w-8 h-8 bg-slate-400 rounded-[50%]   ' ></div>
          <div className=' ' > 
            <div className='text-[p16x] text-white ' >Ibrahim Shobo</div>
            <div className=' text-[11px] text-gray-50 ' >Hello, Welcome back</div>
          </div>
        </div>
        <div className='h-[100%] flex items-center gap-3' >
          <input type='text' className='h-[32px] p-2 rounded-sm outline-none ' placeholder='Search' />
          <div className='flex gap-2 items-center bg-gray-600 p-1 rounded-md text-[12px]'>
          <div className='text-white' >NO</div>
          <div className='bg-green-400 rounded-sm p-1 text-white'>2New</div>
          </div>
        </div>
    </div>
  )
}

export default Header