import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import CreateEmployee from "../../components/EmployeeComponents/CreateEmployee";
import EmployeeTable from "../../components/EmployeeComponents/EmployeeTable";


const EmployeePage = () => {



  const [isOpen, setIsOpen] = useState(false);

  const handleButtonOpen = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);



  return (
    <>
    <div className="w-full flex justify-center">
      <div className="w-[95%]">
      <div className="w-full flex justify-between items-center py-5 ">
        <div className=" flex gap-5 items-center">
          <p className="text-2xl font-semibold">Employees</p>
          <div className="relative">
            <p className="absolute left-3 top-3 text-[#BBBEC8]">
              <IoSearch />
            </p>
            <input
              type="text"
              placeholder="search employee"
              className=" px-[30px] w-[100%] py-2   border-[#BBBEC8] border bg-[#ffff] focus:outline-[#BBBEC8] text-[14px] rounded-sm"
            />
          </div>
        </div>
        <button onClick={handleButtonOpen}
          className="px-4 py-[10px] border-none bg-blue-700 text-[17px] tetx-white font-semibold font-[calibri] rounded-md text-white"  > Add Employee  </button> 
      </div>
      <div>
        <EmployeeTable />
      </div>
      

     
      </div>
      <div
        className={`bg-bgTrans top-0 justify-center items-center ${
          isOpen ? "flex" : "hidden"
        }  absolute h-[100vh]  w-full`}
      >
        <CreateEmployee handleButtonOpen={handleButtonOpen} />
      </div>

    </div>
    </>
  );
};



export default EmployeePage;
