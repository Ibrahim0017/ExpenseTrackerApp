import React from 'react';
import SelectMenu from './SelectMenu';
import { FiHome, FiUsers, FiDollarSign, FiFileText, FiSettings } from 'react-icons/fi'; // Import icons
import { IoGitBranchOutline } from 'react-icons/io5';

const Menudiv = () => {
  return (
    <>
      <div className='h-[90%] w-full bg-white flex flex-col p-2'>
        <h1 className='text-[14px]'>Menu</h1>
        <SelectMenu text='Dashboard' path='/admin/admin_dashboard' Icon={FiHome} />
        <SelectMenu text='Employee' path='/admin/employee' Icon={FiUsers} />
        <SelectMenu text='Expense' path='/admin/expense' Icon={FiDollarSign} />
        <SelectMenu text='Branches' path='/admin/branches' Icon={IoGitBranchOutline} />
        {/* <SelectMenu text='Transaction' path='/admin/transaction' Icon={FiFileText} />
        <SelectMenu text='Reports' path='/admin/reports' Icon={FiFileText} /> */}
        <div className='border border-white my-3'></div>
        <h1 className='text-[14px]'>Support</h1>
        {/* <SelectMenu text='FAQs' path='/admin/faqs' Icon={FiFileText} />
        <SelectMenu text='Contact Us' path='/admin/contact' Icon={FiFileText} /> */}
        <SelectMenu text='Settings' path='/admin/settings' Icon={FiSettings} />
      </div>
    </>
  );
};

export default Menudiv;
