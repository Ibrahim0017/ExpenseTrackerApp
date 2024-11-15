import { useState, useEffect } from 'react'
import TableComponent from '../../components/EmployeeComponents/TableComponent'
import EmployeeTable from '../../components/EmployeeComponents/EmployeeTable'
import BranchDescription from '../../components/EmployeeComponents/BranchDescription'
import { useParams } from 'react-router-dom';
import {useSelector} from "react-redux";
import axios from 'axios';
// import { useGetOneBranchQuery } from "../../service/employee/EmployeeRTK";

const BranchDetail = () => {


    const [toggle, setToggle] = useState('Detail')
    const [data, setData] = useState()
    const tokenHolder = useSelector((state) => state.user_reducer?.users);

 
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

    const {id} = useParams()

//   const { data, error, isLoading } = useGetOneBranchQuery(id);
//   console.log(data)
//   console.log(error)
const getOneBranch = async() =>{

    try{
    const res = await axios.get(`https://expense-tracker-ruug.onrender.com/api/branch/${id}`, 
      {headers: {
        Authorization: `Bearer ${tokenHolder}`
      }},
    )
    console.log(res.data, "hh")
    setData(res.data)
  }
    catch(errors){
        console.log(errors)
    }
  }

  useEffect(() =>{
    getOneBranch()
  }, [])

  console.log(data)


  return (
        <>
    <div className='w-full h-full py-3'>
    <div className='w-full h-[150px] bg-gray-800 rounded-t-md'></div>
    <div className='w-full flex justify-center bg-white pb-3'>
    <div className='w-[90%] '>
        <div className='size-[150px] flex items-center justify-center border rounded-full mt-[-60px] text-[30px] font-medium text-white bg-gray-800'>{data?.data?.name.at(0).toUpperCase()}B</div>
        <div>
            <p className='text-[25px] font-semibold'>{(data?.data?.name.at(0).toUpperCase()) + (data?.data?.name.slice(1))} Branch</p>
            <p className='text-[15px] '>{data?.data?.address}</p>
            <p className='text-[17px] font-medium'>{data?.data?.organisation?.companyName} </p>
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
        </div>
        </>
        
  )
}

export default BranchDetail