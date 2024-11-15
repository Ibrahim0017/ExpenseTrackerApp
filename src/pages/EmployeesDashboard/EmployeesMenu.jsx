import React from "react";
import SelectMenu from "../../components/SelectMenu";
import { FiHome, FiSettings } from "react-icons/fi"; // Importing necessary icons
import { User2Icon } from "lucide-react";

const EmployeesMenu = () => {
  return (
    <div className="h-[90%] w-full bg-white flex flex-col p-2">
      <h1 className="text-[14px]">Menu</h1>
      <SelectMenu text='Dashboard' path='/employeesdash/expense' Icon={FiHome} />
      <SelectMenu text='Profile' path='/employeesdash/myprofile' Icon={User2Icon} />
      {/* <SelectMenu text='Profile' path='/employeesdash/profile' Icon={FiHome} />
      <SelectMenu text='Attendance' path='/employeesdash/attendance' Icon={FiHome} />
      <SelectMenu text='Payroll' path='/employeesdash/payroll' Icon={FiHome} />
      <SelectMenu text='Reports' path='/employeesdash/reports' Icon={FiHome} /> */}
      <h1 className='text-[14px]'>Support</h1>
      <SelectMenu text='Settings' path='/employeesdash/emsettings' Icon={FiSettings} />
    </div>
  );
};

export default EmployeesMenu;
