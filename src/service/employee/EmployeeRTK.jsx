import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const employeeRTK = createApi({
    baseQuery:fetchBaseQuery({
        baseUrl: 'https://expense-tracker-ruug.onrender.com/api',
    }),
    reducerPath: 'employee',
    endpoints: (builder)=>({
        signUpEmployee: builder.mutation({
            query:(body)=>({
                url: "/employee/verify",
                method: "PATCH",
                body
            })
        }),
        signInEmployee: builder.mutation({
            query:(body)=>({
                url: "/employee/sign-in",
                method: "POST",
                body
            })
        }),
        getAllEmployee: builder.query({
            query: ()=>({
                url: '/organisation/employee/all',
                method: "GET"
            })
        })
    })
})

export const {useSignUpEmployeeMutation, useSignInEmployeeMutation, useGetAllEmployeeQuery} = employeeRTK