import React from "react";
import { Route, Routes } from "react-router-dom";
import Profile from "../Admin Pages/Profile";
import ExpenseDetail from "../admin_expense/adminexpensedetail/ExpenseDetail";
import EmployeeDetail from "../EmployeePages/EmployeeDetail";
import EmployeesProfile from "./EmployeesProfile";
import EmployeeExpense from "../admin_expense/EmployeeExpense";
const EmployeesOverview = () => {
  return (
    <>
      <div className="p-5 mt-16 bg-[#f9f9f9] w-[85%] absolute right-0  gap-4 justify-between mobileTab:w-full">
        <Routes>
          <Route path="/expense" element={<EmployeeExpense />} />
          <Route path="/myprofile" element={<EmployeeDetail />} />
          <Route path="/expense/detail/:id" element={<ExpenseDetail />} />
          <Route path="/emsettings" element={<EmployeesProfile />} />
        </Routes>
      </div>
    </>
  );
};

export default EmployeesOverview;
