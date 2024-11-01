import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import StatsCard from './StatsCard';

const AdminDashboard = () => {
  const revenueChartRef = useRef(null);
  const salesReportChartRef = useRef(null);

  useEffect(() => {
    // Revenue Chart
    const revenueChart = new Chart(revenueChartRef.current, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [
        //   {
        //     label: 'Income',
        //     data: [12, 19, 3, 5, 2, 3, 7],
        //     backgroundColor: '#4CAF50',
        //   },
          {
            label: 'Expenses',
            data: [5, 10, 7, 8, 12, 15, 10],
            backgroundColor: '#ff4141',
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    // Sales Report Chart
    const salesReportChart = new Chart(salesReportChartRef.current, {
      type: 'bar',
      data: {
        labels: ['Product Launched', 'Ongoing Product', 'Product Sold'],
        datasets: [
          {
            label: 'Sales',
            data: [233, 23, 482],
            backgroundColor: ['#FF9800', '#FFC107', '#4CAF50'],
          },
        ],
      },
      options: {
        responsive: true,
        indexAxis: 'y',
        scales: {
          x: {
            beginAtZero: true,
          },
        },
      },
    });

    // Cleanup function to destroy charts on component unmount
    return () => {
      revenueChart.destroy();
      salesReportChart.destroy();
    };
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-4 p-6">
      <StatsCard 
        title="Total Employees" 
        value="104" 
        bgGradient="bg-gradient-to-r from-blue-500 to-blue-700" 
      />
      <StatsCard 
        title="Branches" 
        value="5" 
        bgGradient="bg-gradient-to-r from-purple-500 to-purple-700" 
      />
      <StatsCard 
        title="Total Expense" 
        value="$324,920.83" 
        bgGradient="bg-gradient-to-r from-green-500 to-green-700" 
      />
    </div>
    <div className="flex flex-wrap gap-4 p-4 justify-center">
  {/* Transaction Section */}
  <div className="w-full md:w-1/3 lg:w-1/4 bg-white p-4 rounded-lg shadow-md">
    <h2 className="text-lg font-semibold mb-4">Transaction</h2>
    <div className="space-y-4">
      {/* Transaction Items */}
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
      {/* Repeat for other transactions */}
    </div>
  </div>

  {/* Revenue Section */}
  <div className="w-full md:w-2/5 lg:w-[360px] bg-white p-4 rounded-lg shadow-md">
    <h2 className="text-lg font-semibold mb-4">Revenue</h2>
    <div className="text-center mb-4">
      <h3 className="text-3xl font-bold">$193.000</h3>
      <p className="text-green-500 text-sm">+35% from last month</p>
    </div>
    <canvas ref={revenueChartRef} className="w-full h-32"></canvas>
  </div>

  {/* Sales Report Section */}
  <div className="w-full md:w-2/5 lg:w-1/3 bg-white p-4 rounded-lg shadow-md">
    <h2 className="text-lg font-semibold mb-4">Sales Report</h2>
    <canvas ref={salesReportChartRef} className="w-full h-32"></canvas>
  </div>
</div>


    </>
   
  );
};

export default AdminDashboard;
