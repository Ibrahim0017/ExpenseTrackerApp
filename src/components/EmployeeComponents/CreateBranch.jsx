import React from 'react'
import { TbLetterX } from "react-icons/tb";

const CreateBranch = ({handleButtonOpen}) => {
  return (
    <div className='w-[50%]  flex justify-center flex-col items-center py-2 bg-white h-[300px] max-sm:w-[80%]'>
        <div className='w-full flex justify-center pb-3 border-b border-[#BBBEC8] '>
            <div className="w-[95%]  flex justify-between">
            <div className="text-[20px] font-semibold">Add New Branch</div>
            <p
              className="text-[25px] text-[#c4c1c1] cursor-pointer"
              onClick={handleButtonOpen}
            >
              <TbLetterX />
            </p>
            </div>
        </div>
        <form className='w-[95%]'>
            <div className='w-full flex justify-between gap-4 max-sm:flex-col mt-3'>
                <div className='w-full'>
                    <p>Branch Name</p>
                    <div>
                        <input type='text' className='py-2 mt-1 focus:outline-[#BBBEC8] rounded-sm px-2 w-full border' />
                    </div>
                </div>
                <div className='w-full'>
                    <p>Branch Address</p>
                    <div>
                        <input type='text' className='py-2 mt-1 focus:outline-[#BBBEC8] rounded-sm px-2 w-full border' />
                    </div>
                </div>
            </div>
            <button className="px-4 py-[10px] border-none bg-gray-800  text-[17px] tetx-white font-semibold font-[calibri] rounded-md text-white mt-4">
               Create Branch
            </button>
        </form>
    </div>
  )
}

export default CreateBranch