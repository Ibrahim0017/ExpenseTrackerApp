import React from 'react';

function ExpenseList({ expenses }) {
  const totalAmount = expenses.reduce((acc, expense) => acc + expense.amount, 0);

  return (
    <div className="mt-6 bg-white p-4 rounded shadow-md">
      <h2 className="text-lg font-semibold mb-4">Expenses</h2>
      <ul className="space-y-2">
        {expenses.map((expense, index) => (
          <li key={index} className="flex justify-between">
            <div>
              <span className="font-semibold">{expense.name}</span>
              <span className="ml-2 text-gray-500">({new Date(expense.date).toLocaleDateString()})</span>
            </div>
            <span>${expense.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 font-bold">
        Total: ${totalAmount.toFixed(2)}
      </div>
    </div>
  );
}

export default ExpenseList;