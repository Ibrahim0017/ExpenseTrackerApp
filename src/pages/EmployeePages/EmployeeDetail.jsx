import React, { useState } from 'react'
import imageA from '../../assets/WhatsApp Image 2024-09-03 at 10.04.20.jpeg'
import TableComponent from '../../components/EmployeeComponents/TableComponent'

const EmployeeDetail = () => {

    const data = [
        {image: imageA}
    ]

   const [toggle, setToggle] = useState(false)

   const toggleMenu = () =>{
    setToggle(!toggle)
   }
   console.log(toggle)


  return (
    <div>
        <div>
        <div className='w-full h-[150px] bg-red-100 rounded-t-md'></div>
        <div className='w-full flex justify-center'>
        <div className='w-[90%]'>
            <div><img src={imageA} className='size-[150px] border rounded-full mt-[-60px]' /></div>
            <div>
                <p className='text-[25px] font-semibold'>Nnorom Uchechi</p>
                <p className='text-[15px] '>Purchasing Manager</p>
                <p className='text-[17px] font-medium'>Company Lyd</p>
            </div>
            <div className=' flex mt-4'>
                <div className='w-full'>
                   <p className='cursor-pointer font-medium' onClick={toggleMenu}>Description</p>
                   <div className='border-t border-[#BBBEC8]'></div> 
                    </div>
                    <div className='w-full'>
                    <p className='cursor-pointer font-medium' onClick={toggleMenu}>Expenses</p>
                    <div className='border-t border-[#BBBEC8]'></div> 
                    </div>
            </div>

            {toggle?
            <div className='w-full  mt-4 border border-[#BBBEC8]'>
                <div className='w-full flex flex-col items-center justify-end'>
                   <div className='w-[98%] mt-2'>
                <b className='pt-2'>Personal Information</b>
                <div className=' w-full flex justify-between mt-1'>
                <div className=' w-full'>
                <b className='text-[#7d7e83]'>First Name</b>
                <p>Uchechi</p>
                </div>
                <div className=' w-full'>
                <b className='text-[#7d7e83]'>Last Name</b>
                <p>Uchechi</p>
                </div>
                </div>
                <div className=' w-full flex justify-between mt-2'>
                <div className=' w-full '>
                <b className='text-[#7d7e83]'>Email Address</b>
                <p>Uchechi</p>
                </div>
                <div className=' w-full'>
                <b className='text-[#7d7e83]'>Phone</b>
                <p>Uchechi</p>
                </div>
                </div>
                </div>


                <div className='w-[98%] mt-2'>
                <b className='pt-2'>Other Information</b>
                <div className=' w-full flex justify-between mt-1'>
                <div className=' w-full'>
                <b className='text-[#7d7e83]'>Branch</b>
                <p>Uchechi</p>
                </div>
                <div className=' w-full'>
                <b className='text-[#7d7e83]'>Staus</b>
                <p>Uchechi</p>
                </div>
                </div>
                <div className=' w-full flex justify-between mt-2'>
                <div className=' w-full '>
                <b className='text-[#7d7e83]'>Total Expenses</b>
                <p>Uchechi</p>
                </div>
                <div className=' w-full'>
                <b className='text-[#7d7e83]'>Joined Company</b>
                <p>Uchechi</p>
                </div>
                </div>
                </div>  

                </div>
                
            </div>:
            <div>
                <TableComponent />
            </div>
            
        }
            </div>
        </div>
        </div>
    </div>

  )
}

export default EmployeeDetail