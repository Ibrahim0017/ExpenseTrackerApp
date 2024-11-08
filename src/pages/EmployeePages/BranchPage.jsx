import React, { useEffect, useState } from 'react'
import { IoSearch } from "react-icons/io5";
import { HiOutlineDotsVertical } from "react-icons/hi";
import CreateBranch from '../../components/EmployeeComponents/CreateBranch';
import { Link } from 'react-router-dom';
import { IoIosGitBranch } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import axios from 'axios';
import {useSelector} from "react-redux";

const BranchPage = () => {

  // const data = [
  //   {branch: 'Agboju Branch', address: "No 2, old Ojo Road", employess: '20', expenses: "10"},
  //   {branch: 'Alakija Branch', address: "No 2, old Ojo Road", employess: '20', expenses: "10"},
  //   {branch: 'Festac Branch', address: "No 2, old Ojo Road", employess: '20', expenses: "10"},
    // {branch: 'Agboju', address: "No 2, old Ojo Road", employess: '20', expenses: "10"},
    // {branch: 'Agboju', address: "No 2, old Ojo Road", employess: '20', expenses: "10"},
    // {branch: 'Agboju', address: "No 2, old Ojo Road", employess: '20', expenses: "10"},
    // {branch: 'Agboju', address: "No 2, old Ojo Road", employess: '20', expenses: "10"},
  // ]


    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState()
    const tokenHolder = useSelector((state) => state.user_reducer?.users);

    const handleButtonOpen = () => {
      setIsOpen(!isOpen);
    };
    console.log(isOpen);

    const getAllBranches = async() =>{

      try{
      const res = await axios.get('https://expense-tracker-ruug.onrender.com/api/branch', 
        {headers: {
          Authorization: `Bearer ${tokenHolder}`
        }},
      )
      console.log(res)
      setData(res.data.data)
    }
      catch(errors){
          console.log(errors)
      }
    }

    useEffect(() =>{
      getAllBranches()
    }, [])




  return (
    <>
    <div className='w-full flex justify-center'>
        <div className='w-[95%]'>
        <div className="w-full flex justify-between items-center py-5 ">
        <div className=" flex ">
          <p className="text-2xl font-semibold flex gap-2 items-center max-md:text-xl"> <p><IoIosGitBranch /></p>Branches </p>
        </div>
        <div className='flex gap-5 items-center'>
        <div className="relative">
            <p className="absolute left-3 top-3 max-md:cursor-pointer text-[#BBBEC8] max-md:left-[-10px] max-md:top-[-5px] max-md:text-xl">
              <IoSearch />
            </p>
            <input
              type="text"
              placeholder="search branch"
              className=" px-[30px] w-[100%] py-2   border-[#BBBEC8] border bg-[#ffff] focus:outline-[#BBBEC8] text-[14px] rounded-sm max-md:hidden"
            />
          </div>
        <button onClick={handleButtonOpen} className="px-4 py-[10px] border-none bg-gray-800 text-[17px] tetx-white font-semibold font-[calibri]  rounded-md text-white">+ Add Branch </button>
        </div>
      </div>
      
      <div>
        <p>3 Branches Found</p>
        <div className='grid gap-3 grid-cols-cardGrid mt-4'>
          {data?.map((props, index)=> (
               <div className=' w-full bg-white flex flex-col items-center shadow-md pt-3 rounded-md' key={index}>
               <div className='w-[90%]' >
               <div className='flex justify-between items-center text-[20px]'><p className='flex gap-1 items-center'><p><IoIosGitBranch /></p>{props.name}</p> <p className='cursor-pointer'><DotsComponent/> </p></div>
                <p className='mt-2 flex gap-1 items-center'> <p><IoLocationOutline /></p>{props.address}</p>
               </div>
               <div className='border-t w-full mt-2'></div>
               <div className='w-[90%] mt-2'>
               <div className='w-full flex justify-between'>
                <p className=' font-medium text-[#aaacb3] text-[17px]'>No of Employees: 20 </p>
                <p className='font-medium'>3</p>
                </div>
                <div className='flex justify-between'>
                <p className=' font-medium text-[#aaacb3] text-[17px]'>No of Expense: 10</p>
                <p className=' font-medium'>23</p>
                </div>
               </div>
              <Link className='w-full' to = '/admin/branchdetail' ><p className='bg-gray-800 w-full text-center font-medium text-white text-[17px] py-2 cursor-pointer rounded-b-md'>See more...</p> </Link>
              </div>
          ))}
        </div>
      </div>
        </div>
    </div>

    <div className={`bg-bgTrans top-0 justify-center left-0 items-center ${isOpen ? "flex" : "hidden"} absolute h-[100vh] w-full`}>
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