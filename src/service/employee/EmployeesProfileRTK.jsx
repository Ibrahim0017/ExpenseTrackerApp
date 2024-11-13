import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const EmployeesProfileRTK = createApi({
    baseQuery:fetchBaseQuery({
        baseUrl: 'https://expense-tracker-ruug.onrender.com/api',
        prepareHeaders: (headers, { getState }) => {
            const token = getState()?.user_reducer.users;
            if (token) {
              headers.set("Authorization", `Bearer ${token}`);
            }
          },
    }),
    reducerPath: 'employee',
    endpoints: (builder)=>({
        employeeProfile: builder.query({
            query:()=>({
                url: "/employee/profile",
                method: "GET",
            
            })
        }),
    })
})

export const {useEmployeeProfileQuery} = EmployeesProfileRTK