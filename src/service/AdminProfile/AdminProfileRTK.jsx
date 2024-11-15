import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const adminProfileRTK = createApi({
    baseQuery:fetchBaseQuery({
        baseUrl: 'https://expense-tracker-ruug.onrender.com/api',
        prepareHeaders: (headers, { getState }) => {
            const token = getState()?.user_reducer.users;
            if (token) {
              headers.set("Authorization", `Bearer ${token}`);
            }
          },
    }),
    reducerPath: 'admin',
    endpoints: (builder)=>({
        adminProfile: builder.query({
            query:()=>({
                url: "/organisation/profile",
                method: "GET",
            
            })
        }),
        getAllEmployee: builder.query({
            query: ()=>({
                url: 'profile',
                method: "GET"
            })
        })
    })
})

export const {useAdminProfileQuery,useGetAllEmployeeQuery} = adminProfileRTK