import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const expenseRTK = createApi({
  reducerPath: "expense",
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
    getOneExpenses: builder.query({
      query: (id) => ({
        url: `/expense/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useAddExpenseMutation,
  useGetAllExpensesQuery,
  useGetOneExpensesQuery,
} = expenseRTK;
