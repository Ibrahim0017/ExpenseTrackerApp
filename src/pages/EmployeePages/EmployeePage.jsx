import { useState, } from "react";
import { IoSearch } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdMore } from "react-icons/io";
import { Link } from "react-router-dom";
import CreateEmployee from "../../components/EmployeeComponents/CreateEmployee";
// import imagea from "../../assets/WhatsApp Image 2024-09-03 at 10.04.20.jpeg";
import { useGetAllEmployeeQuery } from "../../service/employee/EmployeeRTK";
import moment from "moment";



const EmployeePage = () => {



  const [isOpen, setIsOpen] = useState(false);
 

  const { data, error, isLoading } = useGetAllEmployeeQuery();
  
  
  console.log(data)
  console.log(error)
  

  const handleButtonOpen = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);

  return (
    <>
      <div className="w-full bg bg-white py-3 px-4 ">
      <div className="w-full flex justify-between items-center ">
      <p className="text-2xl font-semibold max-md:text-xl">Employees</p>
        <div className="flex gap-5 items-center">
          
          <div className="relative">
            <p className="absolute left-3 top-3 text-[#BBBEC8] max-md:top-[-6px] max-md:left-0 max-md:text-xl">
              <IoSearch />
            </p>
            <input
              type="text"
              placeholder="search employee"
              className=" px-[40px] py-2   border-[#BBBEC8] border bg-[#ffff] focus:outline-[#BBBEC8] text-[14px] rounded-sm max-md:hidden"
            />
      
        </div>
        <button
          onClick={handleButtonOpen}
          className="px-4 py-[10px] border-none bg-gray-800 text-[17px] tetx-white font-semibold font-[calibri] rounded-md text-white"
        >
         + Add Employee
        </button>
        </div>
      </div>
      <div className="overflow-x-auto mt-6">
        <table className="w-full min-w-[55rem] ">
          <thead className="text-left rounded-sm">
            <tr className="border border-gray-50 bg-gray-50 ">
            <th className="px-3 py-3 font-[calibri] text-[17px]"> Employee Name</th>
              <th className="px-3 py-3 font-[calibri] text-[17px]">Date Created</th>
             
              <th className="px-3 py-3 font-[calibri] text-[17px]"> Email </th>
              <th className="px-3 py-3 font-[calibri] text-[17px]">Branch Name</th>
              <th className="px-3 py-3 font-[calibri] text-[17px]">Expense</th>
              <th className="px-3 py-3 font-[calibri] text-[17px]"> </th>
            </tr>
          </thead>
          <tbody>
            {data && data.data && data.data.map((value, index)  => (
              <tr
                className={`border border-gray-50 ${
                  index % 2 !== 0 ? "bg-gray-50" : "bg-white"
                } `}
                key={index}
              >
                
                <td className=" text-[14px] flex gap-2 items-center font-medium px-3 py-3 ">
                 <div className='w-full flex gap-2 items-center'>
                 <div className="size-9  max-md:size-[30px] rounded-full flex justify-center items-center font-semibold bg-gray-500">
                    {value.image ? (
                      <img
                        className="size-full max-md:size-9 flex justify-center items-center rounded-full bg-blue-400"
                        src={value.image} />) : (
                        
                      <p>{value.lastName?.charAt(0).toUpperCase()}</p>
                    )}
                  </div>
                <Link to = {`/admin/employeedetail/${value._id}`}>   <p className="w-full font-[calibri] font-medium max-md:text-[15px]">
                    {(value.firstName.slice(0, 1).toUpperCase()) + (value.firstName.slice(1))} {(value.lastName.slice(0, 1).toUpperCase()) + (value.lastName.slice(1))}
                  </p></Link>
                 </div>
                </td>
                <td className="px-3 py-3 font-[calibri] max-md:text-[15px]">{moment(value.createdAt).format('MMMM Do YYYY')}</td>
                <td className=" px-3 py-3 font-[calibri] max-md:text-[15px]">{value.email}</td>
                <td className=" px-3 py-3 font-[calibri] max-md:text-[15px]"> {(value.branch?.name.slice(0, 1).toUpperCase()) + (value.branch?.name.slice(1))} Branch</td>
                <td className=" px-3 py-3  font-[calibri] max-md:text-[15px]">0</td>
                <td className=" px-3 py-3  cursor-pointer relative">
                  <ButtonComp />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>

      <div
        className={`bg-bgTrans justify-center items-center w-full max-md:h-full ${
          isOpen ? "flex" : "hidden"
        }  absolute h-[100vh]  w-full`}
      >
        <CreateEmployee handleButtonOpen={handleButtonOpen} />
      </div>
    </>
  );
};

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
         <div className="flex items-center gap-1 py-2 pl-1 hover:bg-gray-100 hover:rounded-md hover:cursor-pointer text-red-500">
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

export default EmployeePage;
