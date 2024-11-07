import React, { useState } from 'react'
// import { BsThreeDots } from "react-icons/bs";
import { Link } from 'react-router-dom';
import imagea from "../../assets/WhatsApp Image 2024-09-03 at 10.04.20.jpeg";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdMore } from "react-icons/io";
import { useGetAllEmployeeQuery } from "../../service/employee/EmployeeRTK";
import moment from "moment";

const TableComponent = () => {



  const { data, error, isLoading } = useGetAllEmployeeQuery();

  console.log(data)
  console.log(error)
  


  return (
    <div className="overflow-x-auto mt-6 ">
    <table className="w-full min-w-[55rem]  ">
      <thead className='text-left rounded-sm'>
        <tr className="border border-gray-50 bg-gray-50 ">
        <th className="px-3 py-3 font-[calibri] text-[17px]">Employee Name</th>
          <th className="px-3 py-3 font-[calibri] text-[17px]">Date Created</th>
          <th className="px-3 py-3 font-[calibri] text-[17px]"> Expense Name</th>
          <th className="px-3 py-3 font-[calibri] text-[17px]"> Price </th>   
          <th className="px-3 py-3 font-[calibri] text-[17px]">Quantity</th>
          <th className="px-3 py-3 font-[calibri] text-[17px]"> </th>
        </tr>
      </thead>
      <tbody>
        {data && data.data && data.data.map((value, index) => (
          <tr
           className={`border border-gray-50 ${
            index % 2 !== 0 ? "bg-gray-50" : "bg-white"
          } `}
          key={index}
          >
            <td className=" py-4 flex px-4 items-center gap-2  ">
                  <div className="size-[35px] rounded-full flex justify-center items-center font-semibold bg-gray-500">
                    {value.image ? (
                      <img
                        className="size-[100%] flex justify-center items-center rounded-full bg-blue-400"
                        src={value.image} />) : (
                      <p>{value.lastName?.charAt(0).toUpperCase()}</p>
                    )}
                  </div>
                 <Link to='/employeedetail'>
                 <p className="font-[calibri] font-medium cursor-pointer">
                 {(value.firstName.slice(0, 1).toUpperCase()) + (value.firstName.slice(1))} {(value.lastName.slice(0, 1).toUpperCase()) + (value.lastName.slice(1))}
                  </p>
                  </Link>
                </td>
            <td className="px-3 py-3 font-[calibri]">{moment(value.createdAt).format('MMMM Do YYYY')}</td>
            <td className="px-3 py-3 font-[calibri] ">girl</td>
            <td className="px-3 py-3 font-[calibri]">{value.email}</td>
            <td className="px-3 py-3 font-[calibri]">Girl</td>
            <td className="px-3 py-3  cursor-pointer relative">
              <ButtonComp />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>


  )
}


const ButtonComp = () => {
    const [open, setOpen] = useState(false);
  
    const handleOpen = () => {
      setOpen(!open);
    };
  
    return (
      <>
        <div onClick={handleOpen}>
          <IoMdMore />
        </div>
        {open && (
         <div className="bg-white absolute right-16 w-[165px] mt-[10px] text-[13px] flex justify-between py-[7px] px-1 flex-col border border-gray-100 rounded-lg shadow-md ">
         <div className="flex items-center gap-1 py-2 pl-1 hover:bg-gray-100 hover:rounded-md hover:cursor-pointer text-red-500">
           <div>
             <RiDeleteBin6Line />
           </div>
           <div>Delete Expense</div>
         </div>
       </div>
      )}
          </>
        )
}

export default TableComponent