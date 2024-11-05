import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";
import { useSelector } from "react-redux";

export const getToken = ()=>{
    const token = useSelector((state) => state.user_reducer.users);

    return token
}

export const expenseRTK = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://expense-tracker-ruug.onrender.com/api",
  }),
  prepareHeaders: (headers) => {

    if (getToken()) {
      headers.set("Authorization", `Bearer ${getToken()}`);
    }
  },
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
