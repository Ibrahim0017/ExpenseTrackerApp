import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const adminProfileRTK = createApi({
    baseQuery:fetchBaseQuery({
        baseUrl: 'https://expense-tracker-ruug.onrender.com/api/organisation/',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().users;
            if (token) {
              headers.set("Authorization", `Bearer ${token}`);
            }
          },
    }),
    reducerPath: 'admin',
    endpoints: (builder)=>({
        adminProfile: builder.query({
            query: ()=>({
                url: 'profile',
                method: "GET"
            })
        })
    })
})

export const {useAdminProfileQuery} = adminProfileRTK