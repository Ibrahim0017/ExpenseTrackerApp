import React from "react";
import EspenseTrack from "./EspenseTrack";
import Cartegory from "./Cartegory";
import { Route, Routes } from "react-router-dom";
import EmployeePage from "../pages/EmployeePages/EmployeePage";
import AdminExpensePage from "../pages/admin_expense/AdminExpensePage";
import Profile from "../pages/Admin Pages/Profile";
import AdminDashboard from "./AdminDashboard";
import EmployeeDetail from "../pages/EmployeePages/EmployeeDetail";
import BranchPage from "../pages/EmployeePages/BranchPage";
import ExpenseDetail from "../pages/admin_expense/adminexpensedetail/ExpenseDetail";
import UploadExpense from "../components/UploadExpense";
import CreateBranch from "../components/EmployeeComponents/CreateBranch";
import BranchDetail from "../pages/EmployeePages/BranchDetail";
import EmployeeDetail from "../pages/EmployeePages/EmployeeDetail";

const DashboardOverview = () => {
  return (
    <>
      <div className="p-5 mt-16 bg-[#f9f9f9] w-[85%] absolute right-0  gap-4 justify-between">
        <Routes>
          <Route path="/admin_dashboard" element={<AdminDashboard />} />
          <Route path="/expenseTrack" element={<EspenseTrack />} />
          <Route path="/employee" element={<EmployeePage />} />
          <Route path="/employeedetail" element={<EmployeeDetail />} />
          <Route path="/branchpage" element={<BranchPage />} />
          <Route path="/expense" element={<AdminExpensePage />} />
          <Route path="/createbranch" element={<CreateBranch />} />
          <Route path="/branchdetail" element={<BranchDetail />} />
          <Route path="/branches" element={<BranchPage />} />
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
