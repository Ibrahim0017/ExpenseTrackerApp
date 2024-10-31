import React from "react";
import SelectMenu from "../../components/SelectMenu";

const EmployeesMenu = () => {
  return (
    <div className="h-[90%] w-full bg-white flex flex-col p-2  ">
      <h1 className="text-[14px]">Menu</h1>
      <SelectMenu text='Dashboard' />
      <SelectMenu text='Dashboard' />
      <SelectMenu text='Dashboard' />
      <SelectMenu text='Dashboard' />
      <SelectMenu text='Dashboard' />
      <h1 className='text-[14px]' >Support</h1>
      <SelectMenu text='Settings' path='/employeesdash/settings' />
    </div>
  );
};

export default EmployeesMenu;
