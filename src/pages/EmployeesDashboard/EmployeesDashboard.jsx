import React from "react";
import LeftEmployees from "./LeftEmployees";
import RightEmployees from "./RightEmployees";

const EmployeesDashboard = () => {
  return (
    <>
      <div className="flex h-[100vh]">
        <LeftEmployees/>
        <RightEmployees />
      </div>
    </>
  );
};

export default EmployeesDashboard;
