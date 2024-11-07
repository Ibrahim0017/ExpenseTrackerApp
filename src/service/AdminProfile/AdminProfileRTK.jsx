import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const adminProfileRTK = createApi({
    baseQuery:fetchBaseQuery({
        baseUrl: 'https://expense-tracker-ruug.onrender.com/api/organisation/profile',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().users;
            if (token) {
              headers.set("Authorization", `Bearer ${token}`);
            }
          },
    }),
    reducerPath: 'admin',
    endpoints: (builder)=>({
        adminProfile: builder.mutation({
            query:(body)=>({
                url: "/admin/verify",
                method: "PATCH",
                body
            })
        }),
        getAllEmployee: builder.query({
            query: ()=>({
                url: '/organisation/admin/all',
                method: "GET"
            })
        })
    })
})

export const {useAdminProfileMutation,useGetAllEmployeeQuery} = adminProfileRTK