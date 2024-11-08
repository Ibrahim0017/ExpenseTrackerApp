// import { X } from 'lucide-react';
import { useState } from "react";
// import { X } from "lucide-react";
import { useAddExpenseMutation } from "../service/expense/ExpenseRTK";

const UploadExpense = ({ onClose }) => {
  const [values, setValues] = useState({
    title: "",
    quantity: "",
    price: 0,
    reason: "",
    note: "",
  });
  const [create, { data, error, isLoading, isSuccess }] =
    useAddExpenseMutation();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const uploadExpense = (e) => {
    e.preventDefault();
    create(values);
  };

  console.log(values);
  if (isSuccess) {
    onClose();
  }
  if(error){
    console.log(error)
  }
  return (
    <div className="fixed mt-[57px] inset-0  p-6 bg-black bg-opacity-30 backdrop-blur-sm flex flex-col justify-center">
      <div className="w-full flex flex-col gap-10 text-white">
        <button
          onClick={onClose}
          className="place-self-end hover:scale-125 hover:transition-transform hover:ease-in-out hover:text-red-600 font-medium text-2xl"
        >
     X
        </button>
      </div>
      <div className="font-medium mb-[20px] text-[20px] text-white">
        Employee Expense
      </div>

      <div className="w-full overflow-y-scroll mb-[10px]">
        <div className="w-full flex flex-col gap-1 p-5 bg-white rounded-md ">
          <div>
            <label htmlFor="" className="text-[14px] font-medium">
              Expense name
            </label>
            <textarea
              name="title"
              onChange={handleChange}
              id=""
              placeholder="Write here..."
              className="w-full p-[10px] border outline-none placeholder:text-gray-500 text-[14px] rounded-sm"
              onSubmit={handleChange}
            ></textarea>
          </div>
          <div>
            <label htmlFor="" className="text-[14px] font-medium">
              Quantity
            </label>
            <textarea
              name="quantity"
              onChange={handleChange}
              id=""
              placeholder="Write here..."
              className="w-full p-[10px] border outline-none placeholder:text-gray-500 text-[14px] rounded-sm"
              onSubmit={handleChange}
            ></textarea>
          </div>
          <div>
            <label htmlFor="" className="text-[14px] font-medium">
              Price
            </label>
            <input
              name="price"
              type="number"
              onChange={handleChange}
              id=""
              placeholder="Write here..."
              className="w-full p-[10px] border outline-none placeholder:text-gray-500 text-[14px] rounded-sm"
              onSubmit={handleChange}
            />
          </div>
          <div>
            <label htmlFor="" className="text-[14px] font-medium">
              Reason for Expense
            </label>
            <textarea
              name="reason"
              onChange={handleChange}
              id=""
              placeholder="Write here..."
              className="w-full p-[10px] border outline-none placeholder:text-gray-500 text-[14px] rounded-sm"
              onSubmit={handleChange}
            ></textarea>
          </div>
          <div>
            <label htmlFor="" className="text-[14px] font-medium">
              Expense date
            </label>
            <input
              name="price"
              type="date"
              onChange={handleChange}
              id=""
              placeholder="Write here..."
              className="w-full p-[10px] border outline-none placeholder:text-gray-500 text-[14px] rounded-sm"
              onSubmit={handleChange}
            />
          </div>
          <div>
            <label htmlFor="" className="text-[14px] font-medium">
              Note
            </label>
            <textarea
              name="note"
              onChange={handleChange}
              id=""
              placeholder="Write here..."
              className="w-full p-[10px] border outline-none placeholder:text-gray-500 text-[14px] rounded-sm"
              onSubmit={handleChange}
            ></textarea>
          </div>
          <div className="w-full flex justify-start">
            {" "}
            <button
              className="bg-blue-600 text-[14px] text-white rounded-md px-[20px] py-3 mt-5 font-medium hover:bg-blue-700"
              onClick={uploadExpense}
            >
             {isLoading? 'Loading...' :  'Add Expense'}
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadExpense;
