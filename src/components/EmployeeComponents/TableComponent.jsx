import { useState, useEffect } from 'react'
// import { BsThreeDots } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdMore } from "react-icons/io";
import moment from "moment";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {useSelector} from "react-redux";

const TableComponent = () => {



  const {id} = useParams()
  const [data, setData] = useState(null)

  const tokenHolder = useSelector((state) => state.user_reducer?.users);

  const getAllExpenses = async() =>{

    try{
    const res = await axios.get('https://expense-tracker-ruug.onrender.com/api/expense', 
      {headers: {
        Authorization: `Bearer ${tokenHolder}`
      }},
    )
    console.log(res, "hh")
    setData(res.data.data)
  }
    catch(errors){
        console.log(errors)
    }
  }

  useEffect(() =>{
    getAllExpenses()
  }, [])

  const [branchId, setBranchId] = useState(id); 
  const filteredExpenses = data ? data.filter((expense) => {
  // Check for null/undefined branch and _id
  return expense?.branch?._id === branchId;
}) : []; 

  
  console.log(data)
  


  return (
    <div className="overflow-x-auto mt-6 ">
    <table className="w-full min-w-[55rem]  ">
      <thead className='text-left rounded-sm'>
        <tr className="border border-gray-50 bg-gray-50 ">
        <th className="px-3 py-3 font-[calibri] text-[17px]">Employee Name</th>
          <th className="px-3 py-3 font-[calibri] text-[17px]">Date Created</th>
          <th className="px-3 py-3 font-[calibri] text-[17px]"> Expense Name</th>
          <th className="px-3 py-3 font-[calibri] text-[17px]"> Price </th>   
          <th className="px-3 py-3 font-[calibri] text-[17px]">Quantity</th>
          <th className="px-3 py-3 font-[calibri] text-[17px]"> </th>
        </tr>
      </thead>
      <tbody>
        {filteredExpenses?.map((value, index) => (
          <tr
           className={`border border-gray-50 ${
            index % 2 !== 0 ? "bg-gray-50" : "bg-white"
          } `}
          key={index}
          >
            <td className=" text-[15px] flex gap-2 items-center font-medium px-3 py-3   ">
                  <div className="size-9  rounded-full flex justify-center items-center font-semibold bg-gray-500">
                    {value.image ? (
                      <img
                        className="size-full  flex justify-center items-center rounded-full"
                        src={value.image} />) : (
                      <p>{value?.employee?.lastName.charAt(0).toUpperCase()}</p>
                    )}
                  </div>
                 <Link to={`/admin/employeedetail/${value?._id}`}>
                 <p className="font-[calibri] font-medium cursor-pointer">
                 {(value?.employee?.lastName.slice(0, 1).toUpperCase()) + (value?.employee?.lastName.slice(1))}
                 {(value?.employee?.firstName.slice(0, 1).toUpperCase()) + (value?.employee?.firstName.slice(1))} 
                  </p>
                  </Link>
                </td>
            <td className="px-3 py-3 font-[calibri]">{moment(value?.updatedAt).format('MMMM Do YYYY')}</td>
            <td className="px-3 py-3 font-[calibri] ">{value?.title}</td>
            <td className="px-3 py-3 font-[calibri]">{value?.price}</td>
            <td className="px-3 py-3 font-[calibri]">{value.quantity
            }</td>
            <td className="px-3 py-3  cursor-pointer relative">
              <ButtonComp />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>


  )
}


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
         <div className="bg-white absolute right-16 w-[165px] mt-[10px] text-[13px] flex justify-between py-[7px] px-1 flex-col border border-gray-100 rounded-lg shadow-md ">
         <div className="flex items-center gap-1 py-2 pl-1 hover:bg-gray-100 hover:rounded-md hover:cursor-pointer text-red-500">
           <div>
             <RiDeleteBin6Line />
           </div>
           <div>Delete Expense</div>
         </div>
       </div>
      )}
          </>
        )
}

export default TableComponent