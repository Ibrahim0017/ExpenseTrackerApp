import React, { useEffect, useState } from "react";
import OrderTable from "./OrderTable";
import UploadExpense from "../../components/UploadExpense";
import axios from "axios";
import { useSelector } from "react-redux";
import { useAdminProfileQuery } from "../../service/AdminProfile/AdminProfileRTK";

const AdminExpensePage = () => {
  // const [popUp, setPopUp] = useState(false);
  // const toggleModal = () => {
  //   setPopUp(!popUp)
  // }
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState();
  const [query, setQuery] = useState("");
  const tokenHolder = useSelector((state) => state.user_reducer?.users);
  const { data: organisationData } = useAdminProfileQuery();

  const getAllExpenses = async () => {
    try {
      const res = await axios.get(
        "https://expense-tracker-ruug.onrender.com/api/expense",
        {
          headers: {
            Authorization: `Bearer ${tokenHolder}`,
          },
        }
      );
      console.log(res);
      setData(res.data.data);
    } catch (errors) {
      console.log(errors);
    }
  };

  const filteredData = data?.filter(
    (el) => el.branch?.organisation === organisationData._id
  );

  const keys = ["title"];
  const search = (e) => {
    const result = e?.filter((item) =>
      keys.some((key) => {
        const value = item[key];
        return typeof value === "string" && value.toLowerCase().includes(query);
      })
    );
    return query ? (result?.length ? result : null) : filteredData;
  };

  const searchData = search(filteredData);

  console.log(searchData);

  useEffect(() => {
    getAllExpenses();
  }, []);

  return (
    <div className="w-full flex my-[20px] flex-col justify-center bg-white p-5">
      <div className=" flex flex-col">
        <div className="text-2xl font-medium"> Staff management</div>
        <div className="text-[16px]">
          Manage you staffs and their expenditures here
        </div>
      </div>

      <div className="w-full">
        <div className="flex mt-[20px] w-full items-center">
          <div className="flex w-full h-14 gap-8 py-2">
            <div className="w-full h-full">
              <input
                type="text"
                placeholder="Search staff..."
                className="w-full text-[14px] h-full placeholder:text-gray-500 border rounded-[5px] outline-none pl-[10px] px-[30px]"
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className="w-full h-full flex justify-end">
              <button
                onClick={() => setShowModal(true)}
                className="hover:bg-blue-800 h-full rounded-md px-[20px] border-none text-[14px] flex items-center bg-blue-700  text-white font-medium "
              >
                <div className="font-semibold">+</div>
                Add expense{" "}
              </button>
            </div>
          </div>
        </div>

        {showModal && <UploadExpense onClose={() => setShowModal(false)} />}
      </div>
      <OrderTable filteredExpenses={searchData} />
    </div>
  );
};

export default AdminExpensePage;
