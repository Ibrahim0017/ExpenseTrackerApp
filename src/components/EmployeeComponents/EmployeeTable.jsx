import { useState } from 'react'
import { Link } from 'react-router-dom';
import { useGetAllEmployeeQuery } from "../../service/employee/EmployeeRTK";
import moment from "moment";
import { useParams } from 'react-router-dom';
import { CiEdit } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdMore } from "react-icons/io";

const EmployeeTable = () => {
  
  const {id} = useParams()
  const { data, error, isLoading } = useGetAllEmployeeQuery();

  const [branchId, setBranchId] = useState(id); 
  const filteredEmployees = data && data.data.filter((employee) => employee.branch._id === branchId);

  
  console.log(data)
  console.log(error)


  return (
    <div className="overflow-x-auto mt-6">
        <table className="w-full min-w-[55rem] ">
          <thead className='text-left rounded-sm'>
            <tr className="bborder border-gray-50 bg-gray-50 ">
              <th className="px-3 py-3 font-[calibri] text-[17px]"> Employee Name</th>
              <th className="px-3 py-3 font-[calibri] text-[17px]"> Date Created</th>
              <th className="px-3 py-3 font-[calibri] text-[17px]"> Email </th>
              <th className="px-3 py-3 font-[calibri] text-[17px]">Branch Name</th>
              <th className="px-3 py-3 font-[calibri] text-[17px]">Expense</th>
              <th className="px-3 py-3 font-[calibri] text-[17px]"> </th>
            </tr>
          </thead>
          <tbody>
            {filteredEmployees?.map((value, index) => (
              <tr
              className={`border border-gray-50 ${
                index % 2 !== 0 ? "bg-gray-50" : "bg-white"
              } `}
                key={index}
              >         
                <td className=" text-[15px] flex gap-2 items-center font-medium px-3 py-3 ">
                  <div className="size-9  rounded-full flex justify-center items-center font-semibold bg-gray-500">
                    {value.image ? (
                      <img
                        className="size-full  flex justify-center items-center rounded-full"
                        src={value.image} />) : (
                      <p>{value.lastName.at(0).toUpperCase()}</p>
                    )}
                  </div>
                 <Link to={`/admin/employeedetail/${value._id}`}>
                 <p className="font-[calibri] font-medium cursor-pointer">
                 {(value.lastName.slice(0, 1).toUpperCase()) + (value.lastName.slice(1))} {(value.firstName.slice(0, 1).toUpperCase()) + (value.firstName.slice(1))} 
                  </p>
                  </Link>
                </td>
                <td className="px-3 py-3 font-[calibri] text-[15px]">{moment(value.createdAt).format('MMMM Do YYYY')}</td>
                <td className=" px-3 py-3 font-[calibri] text-[15px]">{value.email}</td>
                <td className=" px-3 py-3 font-[calibri] text-[15px]">{value.branch?.name}</td>
                <td className="px-3 py-3 font-[calibri] text-[15px]">{value.expense?.quantity}</td>
                <td className="px-3 py-3 cursor-pointer relative">
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
         <div className="bg-white absolute right-16 size-[140px] mt-[10px] text-[13px] flex justify-between py-[7px] px-1 flex-col border border-gray-100 rounded-lg shadow-md ">
         <div className="flex items-center gap-1 py-2 pl-1 hover:bg-gray-100 hover:rounded-md hover:cursor-pointer">
           <div>
             <CiEdit />
           </div>
           <div>Suspend </div>
         </div>
         <div className="flex items-center gap-1 py-2 pl-1 hover:bg-gray-100 hover:rounded-md hover:cursor-pointer">
           <div>
             <IoKeyOutline />
           </div>
           <div>Re-send Token</div>
         </div>
         <div className="flex items-center gap-1 py-2 pl-1 hover:bg-gray-100 hover:rounded-md hover:cursor-pointer text-red-500" >
           <div>
             <RiDeleteBin6Line />
           </div>
           <div>Delete user</div>
         </div>
       </div>
      )}

      
    </>
    );
  };

export default EmployeeTable