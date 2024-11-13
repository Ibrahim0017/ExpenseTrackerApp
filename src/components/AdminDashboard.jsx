import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import StatsCard from "./StatsCard";
import axios from 'axios';
import { useSelector } from 'react-redux';
// import { useGetAllBranchQuery } from "../service/employee/EmployeeRTK";

const AdminDashboard = () => {
  const expenseChartRef = useRef(null);
  const [profileData, setProfileData] = useState(null);
  const tokenHolder = useSelector((state) => state.user_reducer?.users);

  // const { data, error, isLoading } = useGetAllBranchQuery();
  console.log(data);
  console.log(error);

  // Fetch Employees
  const numEmployee = async () => {
    try {
      const res = await axios.get("https://expense-tracker-ruug.onrender.com/api/organisation/profile", {
        headers: {
          Authorization: `Bearer ${tokenHolder}`,
        },
      });
      setProfileData(res.data.data); // Assuming data is an array of employees
    } catch (errors) {
      console.log(errors);
    }
  };

  useEffect(() => {
    numEmployee();
  }, []);

  

  // Configure Expense Chart
  useEffect(() => {
    const expenseChart = new Chart(expenseChartRef.current, {
      type: "bar",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
          {
            label: "Expenses",
            data: [18000, 27000, 25000, 32000, 20000, 32000, 15000, 18000, 24000, 27000, 15000, 28000],
            backgroundColor: "#2A9D8F",
            hoverBackgroundColor: "#1F776C",
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              callback: (value) => `${value / 1000}k`,
            },
          },
        },
        plugins: {
          tooltip: {
            callbacks: {
              label: (tooltipItem) => `Expenses: $${tooltipItem.raw.toLocaleString()}`,
            },
          },
        },
      },
    });

    return () => {
      expenseChart.destroy();
    };
  }, []);

  return (
    <>
      <div className="bg p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard
          title="Total Employees"
          value={profileData?.employee?.length || 'Loading...'}
          bgGradient="bg-gradient-to-r from-blue-500 to-blue-700"
          margin="my-1"
        />
        <StatsCard
          title="Branches"
          value={data?.length || 'Loading...'}
          bgGradient="bg-gradient-to-r from-purple-500 to-purple-700"
          margin="my-1"
        />
        <StatsCard
          title="Total Expense"
          value='$299,494'
          bgGradient="bg-gradient-to-r from-green-500 to-green-700"
          margin="my-1"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
  <div className="bg-white p-4 rounded-lg shadow-md h-full md:col-span-2 lg:col-span-1">
    <h2 className="text-lg font-semibold mb-4">Transaction</h2>
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
            <i className="fas fa-tshirt text-green-600"></i>
          </div>
          <div>
            <h3 className="text-sm font-medium">Premium T-Shirt</h3>
            <p className="text-xs text-gray-500">Jul 12th 2024</p>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-green-500">Completed</p>
          <p className="text-xs text-gray-500">0JWEJS7SNC</p>
        </div>
      </div>
    </div>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-md h-full col-span-2">
    <div className="text-lg font-semibold mb-2">Expenses</div>
    <div className="text-4xl font-bold text-gray-800 mb-4">$307,000</div>
    <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
      <span>25 Jul - 25 Aug</span>
      <button className="bg-gray-100 px-3 py-1 rounded-md">Date Range</button>
    </div>
    <div className="h-64 w-full">
      <canvas ref={expenseChartRef} className="w-full h-full"></canvas>
    </div>
  </div>
</div>

    </>
  );
};

export default AdminDashboard;
