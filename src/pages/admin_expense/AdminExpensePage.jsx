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

       <div className='w-full'>
        <div className='flex mt-[20px] w-full items-center'>
        
       <div className='flex w-full  gap-8 py-2'>
     <div className='w-full'>
     <input type="text" placeholder='Search user...' className='w-full text-[14px] placeholder:text-gray-500 border rounded-[5px] outline-none pl-[10px] px-[30px]' />
     </div>
       <div className='w-full flex justify-end'><button onClick={() => setShowModal(true)} className='hover:bg-blue-800 rounded-md px-[20px] border-none text-[14px] flex items-center bg-blue-700  text-white font-medium '> 
        <div className='font-semibold'>+</div>
        Add expense </button> 
        </div>
       </div>
       </div>

        { showModal && <UploadExpense onClose={() => setShowModal(false)}/> }
       </div>
       <OrderTable/>
    </div>
  )
}   

export default AdminExpensePage