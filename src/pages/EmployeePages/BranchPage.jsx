import React, { useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import CreateBranch from '../../components/EmployeeComponents/CreateBranch';
import { Link } from 'react-router-dom';

const BranchPage = () => {

  const data = [
    {branch: 'Agboju Branch', address: "No 2, old Ojo Road", employess: '20', expenses: "10"},
    {branch: 'Alakija Branch', address: "No 2, old Ojo Road", employess: '20', expenses: "10"},
    {branch: 'Festac Branch', address: "No 2, old Ojo Road", employess: '20', expenses: "10"},
    {branch: 'Agboju', address: "No 2, old Ojo Road", employess: '20', expenses: "10"},
    {branch: 'Agboju', address: "No 2, old Ojo Road", employess: '20', expenses: "10"},
    {branch: 'Agboju', address: "No 2, old Ojo Road", employess: '20', expenses: "10"},
    {branch: 'Agboju', address: "No 2, old Ojo Road", employess: '20', expenses: "10"},
  ]


    const [isOpen, setIsOpen] = useState(false);

    const handleButtonOpen = () => {
      setIsOpen(!isOpen);
    };
    console.log(isOpen);




  return (
    <>
    <div className='w-full flex justify-center'>
        <div className='w-[95%]'>
        <div className="w-full flex justify-between items-center py-5 ">
        <div className=" flex gap-5 items-center">
          <p className="text-2xl font-semibold">Branches</p>
          <div className="relative">
            <p className="absolute left-3 top-3 text-[#BBBEC8]">
              <IoSearch />
            </p>
            <input
              type="text"
              placeholder="search branch"
              className=" px-[30px] w-[100%] py-2   border-[#BBBEC8] border bg-[#ffff] focus:outline-[#BBBEC8] text-[14px] rounded-sm"
            />
          </div>
        </div>
        <button onClick={handleButtonOpen} className="px-4 py-[10px] border-none bg-blue-700 text-[17px] tetx-white font-semibold font-[calibri]  rounded-md text-white">Add Branch </button>
      </div>
      
      <div>
        <p>3 Branches Found</p>
        <div className='grid gap-3 grid-cols-cardGrid mt-4'>
          {data.map((value)=> (
               <div className=' w-full flex flex-col items-center border pt-3 rounded-md' key={value}>
               <div className='w-[95%]' >
               <div className='flex justify-between items-center'><p>{value.branch}</p> <p className='cursor-pointer'><DotsComponent/> </p></div>
                <p className='mt-2'>{value.address}</p>
               </div>
               <div className='border-t w-full mt-2'></div>
               <div className='w-[95%] mt-2'>
               <div className='w-full flex justify-between'>
                <p className='w-full font-medium'>No of Employees: </p>
                <p className='w-full'>3</p>
                </div>
                <div className='flex justify-between'>
                <p className='w-full font-medium'>No of Expense: </p>
                <p className='w-full'>23</p>
                </div>
               </div>
              <Link className='w-full' to = '/branchdetail' ><p className='bg-blue-700 w-full text-center font-medium text-white text-[17px] py-2 cursor-pointer rounded-b-md'>See more...</p> </Link>
              </div>
          ))}
        </div>
      </div>
        </div>
    </div>

    <div className={`bg-bgTrans top-0 justify-center items-center ${isOpen ? "flex" : "hidden"} absolute h-[100vh] w-full`}>
      <CreateBranch handleButtonOpen={handleButtonOpen}/>
    </div>
    </>
  )
}

const DotsComponent = () => {

  const [open, setOpen] = useState(false)
  const handleOpen = () =>{
    setOpen(!open)
  }

  return(
    <>
    <div onClick={handleOpen} className='text-[20px]'>
    <HiOutlineDotsVertical /> 
    </div>
    {open && (
      <div className="absolute ml-[-140px] mt-[10px] w-[150px] flex justify-center l  bg-white shadow-md border rounded-sm z-20 ">
        <ol className="w-full">
          <li className="w-full py-[7px] text-[14px]  text-center  border-b">
            Edit
          </li>
          <li className="w-full py-[7px] text-center text-[14px]  border-b">
            Suspend
          </li>
          <li className="w-full py-[7px] text-center text-[14px] ">Delete</li>
        </ol>
      </div>
    )}
  </>
  )
}

export default BranchPage