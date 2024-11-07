import React from 'react'
import { useGetOneBranchQuery } from "../../service/employee/EmployeeRTK";
import { useParams } from 'react-router-dom';

const BranchDescription = () => {
  

  const {id} = useParams()

  const { data, error, isLoading } = useGetOneBranchQuery(id);
  console.log(data)
  console.log(error)


  return (
    <div className='w-full  mt-4 border border-[#BBBEC8] py-4'>
                    <div className='w-full flex flex-col items-center justify-end'>
                    <div className='w-[98%] mt-2'>
                 <b className='pt-2 text-[#BBBEC8]'>Branch Information</b>
                 <div className=' w-full flex justify-between mt-1'>
                 <div className=' w-full'>
                 <b className='text-gray-800'>Branch</b>
                 <p>{data?.data.name}</p>
                 </div>
                 <div className=' w-full'>
                 <b className='text-gray-800'>Address</b>
                 <p>{data?.data.address}</p>
                 </div>
                 </div>
                 <div className=' w-full flex justify-between mt-2'>
                 <div className=' w-full '>
                 <b className='text-gray-800'>Total Expense</b>
                 <p>50</p>
                 </div>
                 <div className=' w-full'>
                 <b className='text-gray-800'>Total Amount</b>
                 <p>200</p>
                 </div>
                 </div>
                 </div>
 
 
                 <div className='w-[98%] mt-2'>
                 <b className='pt-2 text-[#BBBEC8]'>Other Information</b>
                 <div className=' w-full flex justify-between mt-1'>
                 <div className=' w-full'>
                 <b className='text-gray-800'> No of Staffs</b>
                 <p>50</p>
                 </div>
                 <div className=' w-full '>
                 <b className='text-gray-800'>No of Suspended staffs</b>
                 <p>10</p>
                 </div>
                 </div>
                 <div className=' w-full flex justify-between mt-2'>
                 <div className=' w-full'>
                 <b className='text-gray-800'>Status</b>
                 <p>Active</p>
                 </div>
                 <div className=' w-full'>
                 <b className='text-gray-800'>Joined Company</b>
                 <p>12/03/2021</p>
                 </div>
                 </div>
                 </div>  
 
                 </div>
                {/* ))} */}
                
            </div>
  )
}

export default BranchDescription