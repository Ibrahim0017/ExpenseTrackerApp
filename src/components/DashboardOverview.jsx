
import EspenseTrack from "./EspenseTrack";
import {  Route, Routes } from "react-router-dom";
import EmployeePage from "../pages/EmployeePages/EmployeePage";
import AdminExpensePage from "../pages/admin_expense/AdminExpensePage";
import AdminDashboard from "./AdminDashboard";
import CreateBranch from "./EmployeeComponents/CreateBranch";

const DashboardOverview = () => {
  return (
    <>
      <div className="p-5 mt-16 bg-[#f9f9f9] w-[85%] absolute right-0  gap-4 justify-between">
        <Routes>
          <Route path="/admin_dashboard" element={<AdminDashboard />} />
          <Route path="/expenseTrack" element={<EspenseTrack />} />
          <Route path="/employee" element={<EmployeePage />} />
          <Route path="/expense" element={<AdminExpensePage />} />
          <Route path="/createbranch" element={<CreateBranch />} />
        </Routes>
      </div>
    </>
  );
};

export default DashboardOverview;

{
  /* <div className='p-5 h-[90%] bg-[#f9f9f9] flex gap-4 justify-between'>
<EspenseTrack />
<Cartegory />
</div> */
}
