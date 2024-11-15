import { useEffect, useState } from "react";
import UploadExpense from "../../components/UploadExpense";
import axios from "axios";
import { useSelector } from "react-redux";
import { useEmployeeProfileQuery } from "../../service/employee/EmployeeRTK";
import EmployeeTable from "./EmployeeTable";

const EmployeeExpense = () => {
  const [showModal, setShowModal] = useState(false);
  const [data, setData] = useState();
  const [query, setQuery] = useState("");
  const tokenHolder = useSelector((state) => state.user_reducer?.users);

  const { data: profileData } = useEmployeeProfileQuery();

  console.log(profileData);
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

  const filterByEmployee = data?.filter(
    (el) => el.employee?._id === profileData?.data._id
  );

  console.log(filterByEmployee)

  const keys = ["title"];
  const search = (e) => {
    const result = e?.filter((item) =>
      keys.some((key) => {
        const value = item[key];
        return typeof value === "string" && value.toLowerCase().includes(query);
      })
    );
    return query ? (result?.length ? result : null) : e;
  };

  const searchData = search(filterByEmployee);

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
      <EmployeeTable filteredExpenses={searchData} />
    </div>
  );
};

export default EmployeeExpense;
