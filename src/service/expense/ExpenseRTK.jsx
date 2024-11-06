import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const expenseRTK = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://expense-tracker-ruug.onrender.com/api",
    prepareHeaders: (headers, { getState }) => {
      const token = getState()?.user_reducer.users;
      console.log(token);
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }
    },
  }),
  reducerPath: "expense",
  endpoints: (builder) => ({
    addExpense: builder.mutation({
      query: (body) => ({
        url: "/expense/create",
        method: "POST",
        body,
      }),
    }),
    getAllExpenses: builder.query({
      query: () => ({
        url: "/expense",
        method: "GET",
      }),
    }),
  }),
});

export const { useAddExpenseMutation,useGetAllExpensesQuery } = expenseRTK;
