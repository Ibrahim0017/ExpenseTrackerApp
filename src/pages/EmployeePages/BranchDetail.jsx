import { useState } from 'react'
import TableComponent from '../../components/EmployeeComponents/TableComponent'
import EmployeeTable from '../../components/EmployeeComponents/EmployeeTable'
import BranchDescription from '../../components/EmployeeComponents/BranchDescription'

const BranchDetail = () => {


    const [toggle, setToggle] = useState('Detail')

    const handleToggle = (key) =>{
        switch (key) {
            case 'Detail':
                setToggle ('Detail');
                break;
            case 'Employee' :
                setToggle('Employee') ;
                break;
            case 'Expense' :
                setToggle ('Expense') ;
                break;
        
            default: setToggle ('Detail');
                break;
        }
    }
    console.log(toggle)


  return (
        <>
    <div className='w-full h-[150px] bg-gray-800 rounded-t-md'></div>
    <div className='w-full flex justify-center bg-white h-[100vh]'>
    <div className='w-[90%] '>
        <div className='size-[150px] flex items-center justify-center border rounded-full mt-[-60px] text-[30px] font-medium text-white bg-gray-800'>AB</div>
        <div>
            <p className='text-[25px] font-semibold'>Agboju Branch</p>
            <p className='text-[15px] '>No 44, old Ojo Road Agboju Lagos</p>
            <p className='text-[17px] font-medium'>Company Ltd</p>
        </div>
        <div className=' flex mt-4'>
            <div className='w-full'>
               <p className='cursor-pointer font-medium' onClick={() => handleToggle('Detail')}>Description</p>
               <div className='border-t border-[#BBBEC8]'></div> 
                </div>
                <div className='w-full'>
                <p className='cursor-pointer font-medium' onClick={() => handleToggle('Employee')}>Employee </p>
                <div className='border-t border-[#BBBEC8]'></div> 
                </div>
                <div className='w-full'>
                <p className='cursor-pointer font-medium' onClick={() => handleToggle('Expense')}>Expenses</p>
                <div className='border-t border-[#BBBEC8]'></div> 
                </div>
        </div>
        
        {toggle === 'Detail' && <BranchDescription />}
        {toggle === 'Employee' && <EmployeeTable/>}
        {toggle === 'Expense' && <TableComponent />}
        
        </div>
        </div>
        </>
        
  )
}

export default BranchDetail