import React, { useState } from 'react'
import { BsThreeDots } from "react-icons/bs";

const TableComponent = () => {
  
    const data = [
      {
        id: "12/03/2020",
        expenseName: "Egg",
        age: 24,
        expense: 10,
        email:'uccynnorom@gmail.com'
      },
      { id: "3/04/2019", expenseName: "Rice", age: 24, expense: 20, email:'uccynnorom@gmail.com' },
      { id: "3/04/2019", expenseName: "Salary", age: 24, expense: 12, email:'uccynnorom@gmail.com' },
      { id: "3/04/2019", expenseName: "Uche", age: 24, expense: 50, email:'uccynnorom@gmail.com' },
      { id: "3/04/2019", expenseName: "Uche", age: 24, expense: 10, email:'uccynnorom@gmail.com' },
      { id: "3/04/2019", expenseName: "Uche", age: 24, expense: 20, email:'uccynnorom@gmail.com' },
    ];


  return (
    <div className="overflow-x-auto mt-6 ">
    <table className="w-full table-auto rounded-md overflow-x-scroll text-left border border-[#BBBEC8] ">
      <thead>
        <tr className="border border-[#BBBEC8]">
          <th className="px-4 py-3 font-[calibri] text-[17px]">Date Created</th>
          <th className="px-4 py-3 font-[calibri] text-[17px]"> Expense Name</th>
          <th className="px-4 py-3 font-[calibri] text-[17px]"> Quantity </th>
          <th className="px-4 py-3 font-[calibri] text-[17px]">Branch Name</th>
          <th className="px-4 py-3 font-[calibri] text-[17px]">Quantity</th>
          <th className="px-4 py-3 font-[calibri] text-[17px]"> </th>
        </tr>
      </thead>
      <tbody>
        {data.map((value, index) => (
          <tr
            className={`border border-[#BBBEC8] ${
              index % 2 === 0 ? "bg-red-100" : "bg-white"
            } `}
            key={value}
          >
            <td className="px-4  py-3 font-[calibri]">{value.id}</td>
            <td className=" py-4 px-4 flex  items-center gap-2 ">{value.expenseName}</td>
            <td className=" px-2 py-3 font-[calibri]">{value.email}</td>
            <td className=" px-5 py-3 font-[calibri]">{value.age}</td>
            <td className=" py-4  px-5  font-[calibri]">{value.expense}</td>
            <td className=" py-4  px-3   cursor-pointer relative">
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
          <BsThreeDots />
        </div>
        {open && (
          <div className="absolute w-[150px] flex justify-center left-[-120px]  top-10 bg-white border rounded-sm z-20 ">
            <ol className="w-full">
              <li className="w-full py-[7px] text-center text-[14px] ">Delete</li>
            </ol>
          </div>)
          }
          </>
        )
}

export default TableComponent