import React from 'react'
import SelectMenu from './SelectMenu'

const Menudiv = () => {
  return (
   <>
   <div className='h-[90%] w-full bg-white flex flex-col p-2  ' >
    <h1 className='text-[14px]' >Menu</h1>
    <SelectMenu text = 'Dashboard' />
    <SelectMenu text = 'Employee' path='/admin/employee' />
    <SelectMenu text = 'Expense' path='/admin/expense' />
    <SelectMenu text = 'Transaction' />
    <SelectMenu text = 'Transaction' />
    <SelectMenu text = 'Transaction' />
    <div className='border border-white my-3'></div>
    <h1 className='text-[14px]' >Support</h1>
    <SelectMenu text = 'Transaction' />
    <SelectMenu text = 'Transaction' />
    <SelectMenu text = 'Settings' path='/admin/settings' />
   </div>
   </>
  )
}

export default Menudiv