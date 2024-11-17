import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const employeeRTK = createApi({
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
  reducerPath: "employee",
  endpoints: (builder) => ({
    signUpEmployee: builder.mutation({
      query: (body) => ({
        url: "/employee/verify",
        method: "PATCH",
        body,
      }),
    }),
    signInEmployee: builder.mutation({
      query: (body) => ({
        url: "/employee/sign-in",
        method: "POST",
        body,
      }),
    }),
    getAllEmployee: builder.query({
      query: () => "/organisation/employee/all",
    }),
    getOneEmployee: builder.query({
      query: (id) => ({
        url: `/organisation/employee/detail?id=${id}`,
        method: "GET",
      }),
    }),
    getOneBranch: builder.query({
      query: (id) => ({
        url: `branch/${id}`,
        method: "GET",
      }),
    }),
    deleteOneEmployee: builder.mutation({
      query: (body) => ({
        url: `/organisation/employee/delete?
                id=${body.employeeId}&branchId=${body.branchId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useSignUpEmployeeMutation,
  useSignInEmployeeMutation,
  useGetAllEmployeeQuery,
  useGetOneEmployeeQuery,
  useGetOneBranchQuery,
  useDeleteOneEmployeeMutation,
} = employeeRTK;
