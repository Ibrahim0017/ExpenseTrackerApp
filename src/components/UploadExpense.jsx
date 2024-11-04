import React from 'react'
import { X } from 'lucide-react';

const UploadExpense = ({onClose}) => {
  return (
    <div className='fixed mt-[63px] inset-0  p-6 bg-gray-500 bg-opacity-30 backdrop-blur-sm flex flex-col justify-center'>
        <div className='w-full flex flex-col gap-10 text-white'><button onClick={onClose} className='place-self-end hover:scale-125 hover:transition-transform hover:ease-in-out hover:'><X/></button></div>
        <div className='font-medium mb-[20px] text-[20px] text-white'>Employee Expense</div>
     
      <div className='w-full overflow-y-scroll mb-[10px]'>
<div className='w-full  p-5 bg-white rounded-md '>
    <div>
        <label htmlFor="" className='text-[14px] font-medium'>Expense name</label>
        <textarea name="" id="" placeholder='Write here...' className='w-full p-[10px] border outline-none placeholder:text-gray-500 text-[14px] rounded-sm'></textarea>
    </div>
    <div>
        <label htmlFor="" className='text-[14px] font-medium'>Quantity</label>
        <textarea name="" id="" placeholder='Write here...' className='w-full p-[10px] border outline-none placeholder:text-gray-500 text-[14px] rounded-sm'></textarea>
    </div>
    <div>
        <label htmlFor="" className='text-[14px] font-medium'>Price</label>
        <textarea name="" id="" placeholder='Write here...' className='w-full p-[10px] border outline-none placeholder:text-gray-500 text-[14px] rounded-sm'></textarea>
    </div>
    <div>
        <label htmlFor="" className='text-[14px] font-medium'>Reason for Expense</label>
        <textarea name="" id="" placeholder='Write here...' className='w-full p-[10px] border outline-none placeholder:text-gray-500 text-[14px] rounded-sm'></textarea>
    </div>
    <div>
        <label htmlFor="" className='text-[14px] font-medium'>Branch</label>
        <textarea name="" id="" placeholder='Write here...' className='w-full p-[10px] border outline-none placeholder:text-gray-500 text-[14px] rounded-sm'></textarea>
    </div>
 <div className='w-full flex justify-start'>   <button className='bg-blue-600 text-[14px] text-white rounded-md px-[20px] py-3 mt-5 font-medium hover:bg-blue-700'>Add Expense</button> </div>

</div>
      </div>
    </div>
  )
}

export default UploadExpense