import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import CreateEmployee from "../../components/EmployeeComponents/CreateEmployee";
import imagea from "../../assets/WhatsApp Image 2024-09-03 at 10.04.20.jpeg";
import { Link } from "react-router-dom";

const EmployeePage = () => {



  const [isOpen, setIsOpen] = useState(false);

  const handleButtonOpen = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);

  const data = [
    {
      id: "12/03/2020",
      name: "Uche Nnorom",
      age: 24,
      image: imagea,
      expense: 10,
      email:'uccynnorom@gmail.com'
    },
    { id: "3/04/2019", name: "Debofrah Iwuanyawu", age: 24, expense: 20, email:'uccynnorom@gmail.com' },
    { id: "3/04/2019", name: "Uche", age: 24, expense: 12, email:'uccynnorom@gmail.com' },
    { id: "3/04/2019", name: "Uche", age: 24, expense: 50, email:'uccynnorom@gmail.com' },
    { id: "3/04/2019", name: "Uche", age: 24, expense: 10, email:'uccynnorom@gmail.com' },
    { id: "3/04/2019", name: "Uche", age: 24, expense: 20, email:'uccynnorom@gmail.com' },
  ];

  return (
    <>
      <div className="w-full bg bg-white py-3 px-4">
      <div className="w-full flex justify-between items-center ">
        <div className="flex gap-5 items-center">
          <p className="text-2xl font-semibold">Employees</p>
          <div className="relative">
            <p className="absolute left-3 top-3 text-[#BBBEC8]">
              <IoSearch />
            </p>
            <input
              type="text"
              placeholder="search employee"
              className=" px-[40px] py-2   border-[#BBBEC8] border bg-[#ffff] focus:outline-[#BBBEC8] text-[14px] rounded-sm"
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
        <table className="w-full table-auto overflow-x-scroll text-left border border-[#BBBEC8] ">
          <thead>
            <tr className="border border-[#BBBEC8] ">
              <th className="px-4 py-3 font-[calibri] text-[17px]">Date Created</th>
              <th className="px-4 py-3 font-[calibri] text-[17px]"> Employee Name</th>
              <th className="px-4 py-3 font-[calibri] text-[17px]"> Email </th>
              <th className="px-4 py-3 font-[calibri] text-[17px]">Branch Name</th>
              <th className="px-4 py-3 font-[calibri] text-[17px]">Expense</th>
              <th className="px-4 py-3 font-[calibri] text-[17px]"> </th>
            </tr>
          </thead>
          <tbody>
            {data.map((value, index) => (
              <tr
                className={`border border-[#BBBEC8] ${
                  index % 2 === 0 ? "bg-[#d6d8dd]" : "bg-white"
                } `}
                key={value}
              >
                <td className="px-4  py-4 font-[calibri]">{value.id}</td>
                <td className=" py-4 flex  items-center gap-2  ">
                  <div className="size-[45px] rounded-full flex justify-center items-center font-semibold bg-blue-500">
                    {value.image ? (
                      <img
                        className="size-[45px] flex justify-center items-center rounded-full bg-blue-400"
                        src={value.image} />) : (
                      <p>{value.name.charAt(0)}</p>
                    )}
                  </div>
               <Link to='/admin/employeedetail'>   <p className="font-[calibri] font-medium">
                    {value.name.toUpperCase()}
                  </p></Link>
                </td>
                <td className=" px-2 py-4 font-[calibri]">{value.email}</td>
                <td className=" px-5 py-4 font-[calibri]">{value.age}</td>
                <td className=" py-4  px-5  font-[calibri]">{value.expense}</td>
                <td className=" py-4  px-3   cursor-pointer relative">
                  <ButtonComp />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>

      <div
        className={`bg-bgTrans top-0 justify-center items-center left-0 w-full h-[100vh] ${
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
        <BsThreeDots />
      </div>
      {open && (
        <div className="absolute w-[150px] flex justify-center left-[-120px]  top-14 bg-white border rounded-sm z-20 ">
          <ol className="w-full">
            <li className="w-full py-[7px] text-[14px]  text-center  border-b">
              Re-send Token
            </li>
            <li className="w-full py-[7px] text-center text-[14px]  border-b">
              Suspend
            </li>
            <li className="w-full py-[7px] text-center text-[14px] ">Delete</li>
          </ol>
        </div>
      )}
    </>
  );
};

export default EmployeePage;
