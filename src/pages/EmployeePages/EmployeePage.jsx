import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { IoBagOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdMore } from "react-icons/io";
import { Link } from "react-router-dom";
import CreateEmployee from "../../components/EmployeeComponents/CreateEmployee";
// import imagea from "../../assets/WhatsApp Image 2024-09-03 at 10.04.20.jpeg";
import { usegetAllEmployeequery } from "../../service/employee/EmployeeRTK";


const EmployeePage = () => {



  const [isOpen, setIsOpen] = useState(false);

  // const [ { data, error, isLoading, isSuccess }] =
  // usegetAllEmployeequery();

  const handleButtonOpen = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);

  // const data = [
  //   {
  //     id: "12/03/2020",
  //     name: "Uche Nnorom",
  //     age: 24,
  //     image: imagea,
  //     expense: 10,
  //     email:'uccynnorom@gmail.com'
  //   },
  //   { id: "3/04/2019", name: "Deborah Iwuanyawu", age: 24, expense: 20, email:'uccynnorom@gmail.com' },
  //   { id: "3/04/2019", name: "Uche", age: 24, expense: 12, email:'uccynnorom@gmail.com' },
  //   { id: "3/04/2019", name: "Uche", age: 24, expense: 50, email:'uccynnorom@gmail.com' },
  //   { id: "3/04/2019", name: "Uche", age: 24, expense: 10, email:'uccynnorom@gmail.com' },
  //   { id: "3/04/2019", name: "Uche", age: 24, expense: 20, email:'uccynnorom@gmail.com' },
  // ];

  return (
    <>
      <div className="w-full bg bg-white py-3 px-4 ">
      <div className="w-full flex justify-between items-center ">
        <div className="flex gap-5 items-center">
          <p className="text-2xl font-semibold max-md:text-xl">Employees</p>
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
        </div>
        <button
          onClick={handleButtonOpen}
          className="px-4 py-[10px] border-none bg-gray-800 text-[17px] tetx-white font-semibold font-[calibri] rounded-md text-white"
        >
         + Add Employee
        </button>
      </div>
      <div className="overflow-x-auto mt-6">
        <table className="text-[14px] border-b hover:border-none font-medium bg-white w-full ">
          <thead className="text-left rounded-sm">
            <tr className="border border-[#BBBEC8] ">
              <th className="px-3 py-3 font-[calibri] text-[17px]">Date Created</th>
              <th className="px-3 py-3 font-[calibri] text-[17px]"> Employee Name</th>
              <th className="px-3 py-3 font-[calibri] text-[17px]"> Email </th>
              <th className="px-3 py-3 font-[calibri] text-[17px]">Branch Name</th>
              <th className="px-3 py-3 font-[calibri] text-[17px]">Expense</th>
              <th className="px-3 py-3 font-[calibri] text-[17px]"> </th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, index) => (
              <tr
                className={`border border-[#BBBEC8] ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                } `}
                key={value}
              >
                <td className="px-3 py-3 font-[calibri] max-md:text-[15px]">{value.id}</td>
                <td className=" text-[14px] flex gap-2 items-center font-medium px-3 py-3 ">
                 <div className='w-full flex gap-2 items-center'>
                 <div className="size-10  max-md:size-[30px] rounded-full flex justify-center items-center font-semibold bg-blue-500">
                    {value.image ? (
                      <img
                        className="size-full max-md:size-9 flex justify-center items-center rounded-full bg-blue-400"
                        src={value.image} />) : (
                      <p>{value.name.charAt(0)}</p>
                    )}
                  </div>
               <Link to='/admin/employeedetail'>   <p className="w-full font-[calibri] font-medium max-md:text-[15px]">
                    {value.name.toUpperCase()}
                  </p></Link>
                 </div>
                </td>
                <td className=" px-3 py-3 font-[calibri] max-md:text-[15px]">{value.email}</td>
                <td className=" px-3 py-3 font-[calibri] max-md:text-[15px]">{value.age}</td>
                <td className=" px-3 py-3  font-[calibri] max-md:text-[15px]">{value.expense}</td>
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
         <div className="bg-white absolute right-16 size-[165px] mt-[10px] text-[13px] flex justify-between py-[7px] px-1 flex-col border border-gray-100 rounded-lg shadow-md ">
         <div className="flex items-center gap-1 py-2 pl-1 w-full hover:bg-gray-100 hover:rounded-[5px] hover:cursor-pointer hover:">
           <div>
           <IoBagOutline />
           </div>
           <Link to='/admin/expense/detail'><div >View detail</div></Link>
         </div>
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
