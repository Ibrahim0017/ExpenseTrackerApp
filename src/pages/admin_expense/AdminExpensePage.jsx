import React, { useState } from 'react'
import OrderTable from './OrderTable' 
import UploadExpense from '../../components/UploadExpense';

const AdminExpensePage = () => {

  // const [popUp, setPopUp] = useState(false);
  // const toggleModal = () => {
  //   setPopUp(!popUp)
  // }
  const [showModal, setShowModal] = useState(false)


  return (
    <div className='w-full flex my-[20px] flex-col justify-center bg-white p-5'>
       
       <div className=' flex flex-col'>
       <div className='text-2xl font-medium'>User management</div>
       <div className='text-[16px]'>Manage you staffs and their expenditures here</div>
       </div>

       <div className='flex  flex-col justify-between'>
        <div className='flex mt-[20px] justify-between'>
        <div className='text-lg font-medium'>All users</div>
        <div className='gap-6 flex'>
       <input type="text" placeholder='Search' className='text-[14px] py-[5px] placeholder:text-gray-500 border rounded-[5px] outline-none pl-[10px] px-[150px]' />
        <button onClick={() => setShowModal(true)} className='hover:bg-blue-800 border-none hover:border-none items-center rounded-md px-[10px] text-[14px] flex bg-blue-700  text-white font-medium'> <div className='font-semibold text-white '>+</div> Add expense </button>
        </div>
       </div>

        { showModal && <UploadExpense onClose={() => setShowModal(false)}/> }
       </div>
       <OrderTable/>
    </div>
  )
}   

export default AdminExpensePage