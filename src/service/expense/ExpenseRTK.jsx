import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const expenseRTK = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://expense-tracker-ruug.onrender.com/api",
    prepareHeaders: (headers, { getState }) => {
        const token = getState().users;
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
  }),
});

export const { useAddExpenseMutation } = expenseRTK;
