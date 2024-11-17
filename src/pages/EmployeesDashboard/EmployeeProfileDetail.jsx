import React from 'react'
import { useEmployeeProfileQuery } from '../../service/employee/EmployeesProfileRTK';
import moment from 'moment';

const EmployeeProfileDetail = () => {


    const { data, error, isLoading } = useEmployeeProfileQuery();
    console.log(data)


  return (
    <div>
    <div className='bg-white'>
    <div className='w-full h-[150px] bg-gray-800 rounded-t-md'></div>
    <div className='w-full flex justify-center'>
    <div className='w-[90%]'>
        <div className='size-[150px] border rounded-full mt-[-60px] bg-gray-500 flex justify-center items-center'>
            {data?.data?.avatar? (
            <img src={data?.data?.avatar} className='size-full border rounded-full' />) :
            (<p className= 'text-3xl font-bold'>{data?.data?.lastName?.charAt(0).toUpperCase()}{data?.data?.firstName?.charAt(0).toUpperCase()}</p>)
          }
            </div>
        <div>
            <p className='text-[25px] font-semibold'> {(data?.data?.lastName.slice(0, 1).toUpperCase()) + (data?.data?.lastName.slice(1))} {(data?.data?.firstName.at(0).toUpperCase()) + (data?.data?.firstName.slice(1))} </p>
            <p className='text-[15px] '>Purchasing Manager</p>
            <p className='text-[17px] font-medium'>{data?.organisation}</p>
        </div>
        <div className=' flex mt-4'>
            <div className='w-full'>
               <p className='cursor-pointer font-medium' >Description</p>
               <div className='border-t border-[#BBBEC8]'></div> 
                </div>
        </div>

            
        <div className='w-full  mt-4 border border-[#BBBEC8] py-4'>
                <div className='w-full flex flex-col items-center justify-end '>
                <div className='w-[98%] mt-2'>
             <b className='pt-2 text-[#BBBEC8]'>Personal Information</b>
             <div className=' w-full flex justify-between mt-1'>
             <div className=' w-full'>
             <b className='text-gray-800'>First Name</b>
             <p className='mobileTab:text-[13px]' >{data?.data?.firstName}</p>
             </div>
             <div className=' w-full'>
             <b className='text-gray-800'>Last Name</b>
             <p className='mobileTab:text-[13px]'>{data?.data?.lastName}</p>
             </div>
             </div>
             <div className=' w-full flex justify-between mt-2'>
             <div className=' w-full '>
             <b className='text-gray-800'>Email Address</b>
             <p className='mobileTab:text-[13px]'>{data?.data?.email}</p>
             </div>
             <div className=' w-full'>
             <b className='text-gray-800'>Phone</b>
             <p className='mobileTab:text-[13px]'>{data?.data?.phone}</p>
             </div>
             </div>
             </div>


             <div className='w-[98%] mt-2'>
             <b className='pt-2 text-[#BBBEC8]'>Other Information</b>
             <div className=' w-full flex justify-between mt-1'>
             <div className=' w-full'>
             <b className='text-gray-800'>Branch</b>
             <p className='mobileTab:text-[13px]'>{data?.data?.branch?.name}</p>
             </div>
             <div className=' w-full'>
             <b className='text-gray-800'>Status</b>
             <p className='mobileTab:text-[13px]'>Active</p>
             </div>
             </div>
             <div className=' w-full flex justify-between mt-2'>
             <div className=' w-full '>
             <b className='text-gray-800'>Total Expenses</b>
             <p className='mobileTab:text-[13px]'>{data?.data?.expense?.length}</p>
             </div>
             <div className=' w-full'>
             <b className='text-gray-800'>Joined Company</b>
             <p className='mobileTab:text-[13px]'>{moment(data?.data?.createdAt).format('MMMM Do YYYY')}</p>
             </div>
             </div>
             </div>  

             </div>
            
        </div>
        
        </div>
    </div>
    </div>
</div>

  )
}

export default EmployeeProfileDetail