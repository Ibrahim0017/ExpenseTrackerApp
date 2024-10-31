import React from 'react'
import OrderTable from './OrderTable'

const AdminExpensePage = () => {
  return (
    <div className='w-full flex justify-center bg-white'>
       <div className='w-[90%] my-[20px] flex flex-col'>
       <div className='w-full flex flex-col'>
       <div className='text-2xl font-medium'>User management</div>
       <div className='text-[16px]'>Manage you staffs and their expenditures here</div>
       </div>

       <div className='flex mt-[20px] justify-between'>
        <div className='text-lg font-medium'>All users</div>
        <div className='gap-6 flex'>
       <input type="text" placeholder='Search' className='text-[14px] py-[5px] placeholder:text-gray-500 border rounded-[5px] outline-none pl-[10px] px-[150px]' />
        <button className='hover:bg-blue-800 border-none hover:border-none items-center rounded-md px-[10px] text-[14px] flex bg-blue-700  text-white font-medium'> <div className='font-semibold text-white '>+</div> Add user</button>
        </div>
       </div>
       <OrderTable/>
       </div>
    </div>
  )
}

export default AdminExpensePage