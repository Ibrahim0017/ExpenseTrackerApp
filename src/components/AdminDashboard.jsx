import React, { useRef, useEffect, useState } from "react";
import Chart from "chart.js/auto";
import StatsCard from "./StatsCard";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import moment from "moment";

const AdminDashboard = () => {
  const expenseChartRef = useRef(null);
  const tokenHolder = useSelector((state) => state.user_reducer?.users);
  const [data, setData] = useState();
  const [branchData, setBranchData] = useState();
  const [expenseData, setExpenseData] = useState();

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
      setData(res.data.data);
    } catch (errors) {
      console.log(errors);
    }
  };

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllBranches = async () => {
    try {
      const res = await axios.get(
        "https://expense-tracker-ruug.onrender.com/api/branch",
        {
          headers: {
            Authorization: `Bearer ${tokenHolder}`,
          },
        }
      );
      setBranchData(res.data.data);
    } catch (errors) {
      console.log(errors);
    }
  };

  useEffect(() => {
    getAllBranches();
  }, []);

  const getAllExpense = async () => {
    try {
      const res = await axios.get(
        "https://expense-tracker-ruug.onrender.com/api/expense",
        {
          headers: {
            Authorization: `Bearer ${tokenHolder}`,
          },
        }
      );
      setExpenseData(res.data.data);
      console.log(res);
    } catch (errors) {
      console.log(errors);
    }
  };

  useEffect(() => {
    getAllExpense();
  }, []);

  const monthlyTotals = expenseData?.reduce((acc, expense) => {
    const month = moment(expense.createdAt).format("MMM");
    acc[month] = (acc[month] || 0) + expense.price;
    return acc;
  }, {});

  const totalExpense = expenseData?.reduce((total, el) => total + el.price, 0);

  const labels = Object.keys(monthlyTotals || {});
  const dataValues = Object.values(monthlyTotals || {});

  // Use Intl.NumberFormat for formatting
  const currencyFormatter = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  });

  useEffect(() => {
    if (labels.length > 0 && dataValues.length > 0) {
      const expenseChart = new Chart(expenseChartRef.current, {
        type: "bar",
        data: {
          labels,
          datasets: [
            {
              label: "Expenses",
              data: dataValues,
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
                callback: (value) => currencyFormatter.format(value),
              },
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: (tooltipItem) =>
                  `Expenses: ${currencyFormatter.format(tooltipItem.raw)}`,
              },
            },
          },
        },
      });

      return () => {
        expenseChart.destroy();
      };
    }
  }, [labels, dataValues]);

  return (
    <>
      <div className="bg p-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Link to="/admin/employee">
          <StatsCard
            title="Total Employees"
            value={data?.length || "Loading..."}
            bgGradient="bg-gradient-to-r from-blue-500 to-blue-700"
            margin="my-1"
          />
        </Link>
        <Link to="/admin/branches">
          <StatsCard
            title="Branches"
            value={branchData?.length || "Loading..."}
            bgGradient="bg-gradient-to-r from-purple-500 to-purple-700"
            margin="my-1"
          />
        </Link>
        <StatsCard
          title="Total Expense"
          value={currencyFormatter.format(totalExpense || 0)}
          bgGradient="bg-gradient-to-r from-green-500 to-green-700"
          margin="my-1"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <div className="bg-white p-4 rounded-lg shadow-md h-[500px] md:col-span-2 lg:col-span-1 overflow-y-scroll">
          <h2 className="text-lg font-semibold mb-4">Transaction</h2>
          <div className="space-y-4">
          {
            expenseData?.map((value, index) =>(
              <div className="flex items-center justify-between" key={index}>
              <div className="flex items-center space-x-2">
                <div>
                  <h3 className="text-sm font-medium">{value?.title}</h3>
                  <p className="text-xs text-gray-500">{moment(value.createdAt).format('MMMM Do YYYY')}</p>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-green-500">
                  Completed
                </p>
                <p className="text-xs text-gray-500">{currencyFormatter.format(value.price)}</p>
              </div>
            </div>
            ))
          }
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md h-full col-span-2">
          <div className="text-lg font-semibold mb-2">Expenses</div>
          <div className="text-4xl font-bold text-gray-800 mb-4">
            {currencyFormatter.format(totalExpense || 0)}
          </div>
          <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
            <button className="bg-gray-100 px-3 py-1 rounded-md">
              Date Range
            </button>
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
