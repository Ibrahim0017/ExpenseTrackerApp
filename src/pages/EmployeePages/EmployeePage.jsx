import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { IoKeyOutline } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoMdMore } from "react-icons/io";
import { Link } from "react-router-dom";
import CreateEmployee from "../../components/EmployeeComponents/CreateEmployee";
// import imagea from "../../assets/WhatsApp Image 2024-09-03 at 10.04.20.jpeg";
// import { useGetAllEmployeeQuery } from "../../service/employee/EmployeeRTK";
import { useDeleteOneEmployeeMutation } from "../../service/employee/EmployeeRTK";
import moment from "moment";
import Swal from "sweetalert2";
import { IoSearchOutline } from "react-icons/io5";
import { MdKeyboardBackspace } from "react-icons/md";
import { useSelector } from "react-redux";
import axios from "axios";
import { data } from "autoprefixer";
import { useAdminProfileQuery } from "../../service/AdminProfile/AdminProfileRTK";

const EmployeePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState([]);
  const tokenHolder = useSelector((state) => state.user_reducer?.users);

  const { data: organisationData } = useAdminProfileQuery();

  const handleSearchOpen = () => {
    setSearchOpen(!searchOpen);
  };

  const getAllEmployees = async () => {
    try {
      const res = await axios.get(
        "https://expense-tracker-ruug.onrender.com/api/organisation/employee/all",
        {
          headers: {
            Authorization: `Bearer ${tokenHolder}`,
          },
        }
      );
      console.log(res, "hh");
      setData(res.data.data);
    } catch (errors) {
      console.log(errors);
    }
  };

  const filteredData = data?.filter(
    (el) => el.organisation === organisationData._id
  );
  console.log(filteredData, "hello");

  useEffect(() => {
    getAllEmployees();
  }, []);

  useEffect(() => {
    if (data) {
      setFilteredEmployees(filteredData);
    }
  }, [data]);

  const handleSearch = (e) => {
    const searchValue = e.target.value.toLowerCase();
    setSearchTerm(searchValue);

    if (searchValue === "") {
      setFilteredEmployees(filteredData);
    } else {
      const filteredData = filteredData.filter((employee) => {
        return (
          employee.firstName.toLowerCase().includes(searchValue) ||
          employee.lastName.toLowerCase().includes(searchValue) ||
          employee.email.toLowerCase().includes(searchValue)
        );
      });
      setFilteredEmployees(filteredData);
      console.log(filteredData);
    }
  };

  console.log(data);

  const handleButtonOpen = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);

  return (
    <>
      <div className="w-full bg bg-white py-3 px-4 ">
        <div className="w-full flex justify-between items-center ">
          <p className="text-reponsiveText2 font-semibold ">Employees</p>
          {searchOpen ? (
            <div className="relative flex items-center mobileTab:flex pc:hidden md:hidden lg:hidden border-b border-[#BBBEC8] ">
              <button
                onClick={handleSearchOpen}
                className="text-[#BBBEC8] text-2xl"
              >
                <MdKeyboardBackspace />
              </button>
              <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="search employee"
                className=" pl-[10px] w-full py-2   focus:outline-none text-[14px] rounded-sm"
              />
            </div>
          ) : (
            <div className="flex gap-5 items-center pc:flex md:flex lg:flex">
              <div className="relative flex items-center ">
                <p className="absolute left-3 top-3 text-[#BBBEC8] mobile:cursor-pointer mobileTab:top-[-6px] mobileTab:left-[-10px] mobileTab:text-xl">
                  <IoSearch className="mobileTab:hidden" />
                  <IoSearchOutline
                    onClick={handleSearchOpen}
                    className="pc:hidden md:hidden lg:hidden mobileTab:flex"
                  />
                </p>
                <input
                  type="text"
                  value={searchTerm}
                  onChange={handleSearch}
                  placeholder="search employee"
                  className=" px-[40px] py-2   border-[#BBBEC8] border bg-[#ffff] focus:outline-[#BBBEC8] text-[14px] rounded-sm mobileTab:hidden tablet:flex tablet:pr-[10px]"
                />
              </div>
              <button
                onClick={handleButtonOpen}
                className="px-4 py-[10px] border-none bg-gray-800 text-reponsiveText tetx-white font-semibold font-[calibri] rounded-md text-white mobile:"
              >
                + Add Employee
              </button>
            </div>
          )}
        </div>
        <div className="overflow-x-auto mt-6">
          <table className="w-full min-w-[55rem] ">
            <thead className="text-left rounded-sm">
              <tr className="border border-gray-50 bg-gray-50 ">
                <th className="px-3 py-3 font-[calibri] text-[17px]">
                  {" "}
                  Employee Name
                </th>
                <th className="px-3 py-3 font-[calibri] text-[17px]">
                  Date Created
                </th>

                <th className="px-3 py-3 font-[calibri] text-[17px]">
                  {" "}
                  Email{" "}
                </th>
                <th className="px-3 py-3 font-[calibri] text-[17px]">
                  Branch Name
                </th>
                <th className="px-3 py-3 font-[calibri] text-[17px]">
                  Expense
                </th>
                <th className="px-3 py-3 font-[calibri] text-[17px]"> </th>
              </tr>
            </thead>
            <tbody>
              {filteredEmployees?.map((value, index) => (
                <tr
                  className={`border border-gray-50 ${
                    index % 2 !== 0 ? "bg-gray-50" : "bg-white"
                  } `}
                  key={index}
                >
                  <td className=" text-[15px] flex gap-2 items-center font-medium px-3 py-3 ">
                    <div className="w-full flex gap-2 items-center">
                      <div className="size-9 rounded-full flex justify-center items-center font-semibold bg-gray-500">
                        {value.image ? (
                          <img
                            className="size-full  flex justify-center items-center rounded-full"
                            src={value.image}
                          />
                        ) : (
                          <p>{value.lastName?.charAt(0).toUpperCase()}</p>
                        )}
                      </div>
                      <Link to={`/admin/employeedetail/${value._id}`}>
                        <p className="w-full font-[calibri] font-medium">
                          {value.lastName.at(0).toUpperCase() +
                            value.lastName.slice(1)}{" "}
                          {value.firstName.at(0).toUpperCase() +
                            value.firstName.slice(1)}
                        </p>
                      </Link>
                    </div>
                  </td>
                  <td className="px-3 py-3 font-[calibri] text-[15px]">
                    {moment(value.createdAt).format("MMMM Do YYYY")}
                  </td>
                  <td className=" px-3 py-3 font-[calibri] [15px]">
                    {value.email}
                  </td>
                  <td className=" px-3 py-3 font-[calibri] [15px]">
                    {" "}
                    {value.branch?.name.at(0).toUpperCase() +
                      value.branch?.name.slice(1)}{" "}
                    Branch
                  </td>
                  <td className=" px-3 py-3  font-[calibri] text-[15px]">0</td>
                  <td className=" px-3 py-3  cursor-pointer relative">
                    <ButtonComp
                      employeeId={value?._id}
                      branchId={value.branch?._id}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div
        className={`bg-bgTrans justify-center items-center w-full max-md:h-full ${
          isOpen ? "flex" : "hidden"
        }  absolute h-[100vh]  w-full`}
      >
        <CreateEmployee handleButtonOpen={handleButtonOpen} />
      </div>
    </>
  );
};

const ButtonComp = ({ employeeId, branchId }) => {
  const [open, setOpen] = useState(false);

  // console.log(branchId)
  // console.log(employeeId)
  const handleOpen = () => {
    setOpen(!open);
  };

  // const [ deleteEmployee, {error, isLoading, isSuccess }] = useDeleteOneEmployeeMutation();
  // console.log(error)
  // console.log(useDeleteOneEmployeeMutation())
  const tokenHolder = useSelector((state) => state.user_reducer?.users);

  const deleteEmployee = async ({ employeeId, branchId }) => {
    try {
      const res = await axios.delete(
        `/organisation/employee/delete?
                id=${employeeId}&branchId=${branchId}`,
        {
          headers: {
            Authorization: `Bearer ${tokenHolder}`,
          },
          data: {
            employeeId,
            branchId,
          },
        }
      );
      console.log(data);
      return res.data;
    } catch (error) {
      console.error(error.response.data);
      throw error;
    }
  };

  const handleDelete = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((willDelete) => {
      if (willDelete.isConfirmed) {
        deleteEmployee({ employeeId, branchId })
          .then((response) => {
            console.log("Delete response:", response);
            Swal.fire({
              title: "Deleted!",
              text: "Your Employee has been deleted.",
              icon: "success",
            });
          })
          .catch((error) => {
            console.error("Delete error:", error);
          });
      }
    });
  };

  return (
    <>
      <div onClick={handleOpen}>
        <IoMdMore />
      </div>
      {open && (
        <div className="bg-white absolute right-10 size-[140px] mt-[10px] text-[13px] flex justify-between py-[7px] px-1 flex-col border border-gray-100 rounded-lg shadow-md ">
          <div className="flex items-center gap-1 py-2 pl-1 hover:bg-gray-100 hover:rounded-md hover:cursor-pointer">
            <div>
              <CiEdit />
            </div>
            <div>Suspend </div>
          </div>
          <div className="flex items-center gap-1 py-2 pl-1 hover:bg-gray-100 hover:rounded-md hover:cursor-pointer">
            <div>
              <IoKeyOutline />
            </div>
            <div>Re-send Token</div>
          </div>
          <div
            className="flex items-center gap-1 py-2 pl-1 hover:bg-gray-100 hover:rounded-md hover:cursor-pointer text-red-500"
            onClick={handleDelete}
          >
            <div>
              <RiDeleteBin6Line />
            </div>
            <div>Delete user</div>
          </div>
        </div>
      )}
    </>
  );
};

export default EmployeePage;
