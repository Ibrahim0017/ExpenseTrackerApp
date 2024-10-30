import { useState } from 'react'
import { BsThreeDots } from "react-icons/bs";
import imagea from "../../assets/WhatsApp Image 2024-09-03 at 10.04.20.jpeg";

const EmployeeTable = () => {

    const data = [
        {
          id: "12/03/2020",
          name: "Uche Nnorom",
          age: 24,
          image: imagea,
          expense: 10,
          email:'uccynnorom@gmail.com'
        },
        { id: "3/04/2019", name: "Deborah Iwuanyawu", age: 24, expense: 20, email:'uccynnorom@gmail.com' },
        { id: "3/04/2019", name: "Uche", age: 24, expense: 12, email:'uccynnorom@gmail.com' },
        { id: "3/04/2019", name: "Uche", age: 24, expense: 50, email:'uccynnorom@gmail.com' },
        { id: "3/04/2019", name: "Uche", age: 24, expense: 10, email:'uccynnorom@gmail.com' },
        { id: "3/04/2019", name: "Uche", age: 24, expense: 20, email:'uccynnorom@gmail.com' },
      ];


  return (
    <div className="overflow-x-auto mt-6">
        <table className="w-full table-auto overflow-x-scroll text-left border border-[#BBBEC8] ">
          <thead>
            <tr className="border border-[#BBBEC8] ">
              <th className="px-4 py-3 font-[calibri] text-[17px]">Date Created</th>
              <th className="px-4 py-3 font-[calibri] text-[17px]"> Employee Name</th>
              <th className="px-4 py-3 font-[calibri] text-[17px]"> Email </th>
              <th className="px-4 py-3 font-[calibri] text-[17px]">Branch Name</th>
              <th className="px-4 py-3 font-[calibri] text-[17px]">Expense</th>
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
                <td className="px-4  py-4 font-[calibri]">{value.id}</td>
                <td className=" py-4 flex px-4 items-center gap-2  ">
                  <div className="size-[45px] rounded-full flex justify-center items-center font-semibold bg-blue-500">
                    {value.image ? (
                      <img
                        className="size-[45px] flex justify-center items-center rounded-full bg-blue-400"
                        src={value.image} />) : (
                      <p>{value.name.charAt(0)}</p>
                    )}
                  </div>
                  <p className="font-[calibri] font-medium">
                    {value.name.toUpperCase()}
                  </p>
                </td>
                <td className=" px-4 py-3 font-[calibri]">{value.email}</td>
                <td className=" px-4 py-3 font-[calibri]">{value.age}</td>
                <td className=" py-4  px-4  font-[calibri]">{value.expense}</td>
                <td className=" py-4  px-4   cursor-pointer relative">
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
          <div className="absolute w-[150px] flex justify-center left-[-120px]  top-14 bg-white border rounded-sm z-20 ">
            <ol className="w-full">
              <li className="w-full py-[7px] text-[14px]  text-center  border-b">
                Re-send Token
              </li>
              <li className="w-full py-[7px] text-center text-[14px]  border-b">
                Suspend
              </li>
              <li className="w-full py-[7px] text-center text-[14px] ">Delete</li>
            </ol>
          </div>
        )}
      </>
    );
  };

export default EmployeeTable