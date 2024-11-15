import {useState, useEffect} from 'react'
// import { useGetOneBranchQuery } from "../../service/employee/EmployeeRTK";
import { useParams } from 'react-router-dom';
import moment from "moment";
import {useSelector} from "react-redux";
import axios from 'axios';

const BranchDescription = () => {
  
  const [data, setData] = useState()
  const tokenHolder = useSelector((state) => state.user_reducer?.users);
  const {id} = useParams()

  const currencyFormatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  });



  // const { data, error, isLoading } = useGetOneBranchQuery(id);
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

  // console.log(data)

  const [expensedata, setExpenseData] = useState(null)

  const getAllExpenses = async() =>{

    try{
    const res = await axios.get('https://expense-tracker-ruug.onrender.com/api/expense', 
      {headers: {
        Authorization: `Bearer ${tokenHolder}`
      }},
    )
    // console.log(res, "hh")
    setExpenseData(res.data.data)
  }
    catch(errors){
        console.log(errors)
    }
  }

  useEffect(() =>{
    getAllExpenses()
  }, [])

  // console.log(expensedata, "jj")

  
  const [branchId, setBranchId] = useState(id); 
  const filteredExpenses = expensedata ? expensedata.filter((expense) => {
  // Check for null/undefined branch and _id
  return expense?.branch?._id === branchId;
}) : []; 

let totalAmount = 0;
filteredExpenses.forEach((expense) => {
  totalAmount += expense.price;
});



  return (
    <div className='w-full  mt-4 border border-[#BBBEC8] py-4'>
                    <div className='w-full flex flex-col items-center justify-end'>
                    <div className='w-[98%] mt-2'>
                 <b className='pt-2 text-[#BBBEC8]'>Branch Information</b>
                 <div className=' w-full flex justify-between mt-1'>
                 <div className=' w-full'>
                 <b className='text-gray-800'>Branch</b>
                 <p>{data?.data.name}</p>
                 </div>
                 <div className=' w-full'>
                 <b className='text-gray-800'>Address</b>
                 <p>{data?.data.address}</p>
                 </div>
                 </div>
                 <div className=' w-full flex justify-between mt-2'>
                 <div className=' w-full '>
                 <b className='text-gray-800'>Phone</b>
                 <p>{data?.data.phone}</p>
                 </div>
                 <div className=' w-full'>
                 <b className='text-gray-800'>Total Amount</b>
                 <p> {currencyFormatter.format(totalAmount)}</p>
                 </div>
                 </div>
                 </div>
 
 
                 <div className='w-[98%] mt-2'>
                 <b className='pt-2 text-[#BBBEC8]'>Other Information</b>
                 <div className=' w-full flex justify-between mt-1'>
                 <div className=' w-full'>
                 <b className='text-gray-800'> No of Staffs</b>
                 <p>{data?.data.employee?.length}</p> 
                 </div>
                 <div className=' w-full '>
                 <b className='text-gray-800'>No of Suspended staffs</b>
                 <p>Nil</p>
                 </div>
                 </div>
                 <div className=' w-full flex justify-between mt-2'>
                 <div className=' w-full'>
                 <b className='text-gray-800'>Status</b>
                 <p>Active</p>
                 </div>
                 <div className=' w-full'>
                 <b className='text-gray-800'>Joined Company</b>
                 <p>{moment(data?.data.createdAt).format('MMMM Do YYYY')}</p>
                 </div>
                 </div>
                 </div>  
 
                 </div>
                {/* ))} */}
                
            </div>
  )
}

export default BranchDescription