import { useState } from 'react';
import image from "../../assets/young-handsome-man-posing-with-hat_23-2148884336.jpg";
import axios from "axios";
import ExpenseDetail from './adminexpensedetail/ExpenseDetail';
import { useGetAllExpensesQuery } from '../../service/expense/ExpenseRTK';
import { Link } from 'react-router-dom';



const OrderTable = ({id}) => {
    const {data,isLoading,error} = useGetAllExpensesQuery()
    const [values, setValues] = useState({
      staffname: "",
      expensename: "",
      quantity: "",
      price: "",
      reasonforexpense: "",
      branch: "",
      expensedate: "",
      date: ""

    })

    console.log(data)
    console.log(error)

    const handleChange = (event) => {
      const { name, value } = event.target
      setValues({ ...values, [name]: value })
    }
    const uploadExpense = (e) => {
      e.preventDefault()
      data(values)
    }

  return (
    <div className="w-full mt-[20px] overflow-x-auto">
      <table className="w-full min-w-[55rem]">
        <thead className="w-full text-[15px] bg-gray-100">
          <tr className="text-left rounded-sm">
            <th className="font-medium px-3 py-3">Staff name</th>
            <th className="font-medium px-3 py-3">Expense name</th>
            <th className="font-medium px-3 py-3">Quantity</th>
            <th className="font-medium px-3 py-3">Price</th>
            <th className="font-medium px-3 py-3">Reason for Expense</th>
            <th className="font-medium px-3 py-3">Branch </th>
            <th className="font-medium px-3 py-3">Expense Date</th>
          </tr>
        </thead>
        <tbody>
          {data && data.data && data?.data.map((value, index) => (
            <tr className="text-[14px] border-b hover:border-none font-medium hover:cursor-pointer hover:shadow-md transition-all duration-300 ease-in-out hover:bg-gray-50" key={index}>
            <td className="text-[14px] flex gap-2 items-center font-medium px-3 py-3 ">
              <div className="size-10 rounded-full">
                <img className="rounded-full size-full" src={image} />
              </div>
              <Link to={`/admin/expense/detail/${value._id}`}>
              <div>{`${value?.employee?.firstName} ${value?.employee?.lastName}`}</div>
        </Link>
        </td>
           

            <td className="px-3 py-3">{value.title}</td>
            <td className="px-3 py-3">{value.quantity}</td>
            <td className="px-3 py-3">₦{value.price}</td>
            <td className="px-3 py-3">{value.reason}</td>
            <td className="px-3 py-3">{value.branch?.name}</td>
            <td className="px-3 py-3">10/may/2023</td>
         
          </tr>
          ))}

               </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
