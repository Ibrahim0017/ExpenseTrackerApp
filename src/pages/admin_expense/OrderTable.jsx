import React, { useState } from "react";
import image from "../../assets/young-handsome-man-posing-with-hat_23-2148884336.jpg";
import { IoMdMore } from "react-icons/io";
import ViewMore from "../../components/ViewMore";
const tableData = [
  {
    userid: "",
  },
];

const OrderTable = () => {

  return (
    <div className="w-full mt-[20px]">
      <table className="min-w-[70rem]">
        <thead className="text-[15px] bg-gray-50">
          <tr className="text-left rounded-sm">
            <th className="font-medium px-3 py-3">Staff name</th>
            <th className="font-medium px-3 py-3">Expense name</th>
            <th className="font-medium px-3 py-3">Quantity</th>
            <th className="font-medium px-3 py-3">Price</th>
            <th className="font-medium px-3 py-3">Reason</th>
            <th className="font-medium px-3 py-3">Branch </th>
            <th className="font-medium px-3 py-3">Date Added</th>
            <th className="font-medium px-3 py-3"></th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-[14px] font-medium hover:cursor-pointer hover:transition-all hover:duration-500 ">
            <td className="text-[14px] flex gap-2 items-center font-medium px-3 py-3">
              <div className="size-10 rounded-full">
                <img className="rounded-full size-full" src={image} />
              </div>
              <div>Sophia Brown</div>
            </td>

            <td className="px-3 py-3">Accessories</td>
            <td className="px-3 py-3">3</td>
            <td className="px-3 py-3">$320.00</td>
            <td className="px-3 py-3">Faulty</td>
            <td className="px-3 py-3">Chevron</td>
            <td className="px-3 py-3">10/may/2023</td>
            <td className="px-3 py-3">
                <ViewMore />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
