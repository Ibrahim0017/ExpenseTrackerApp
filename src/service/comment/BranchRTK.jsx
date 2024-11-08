import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const commentRTK = createApi({
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
    comment: builder.mutation({
      query: (body) => ({
        url: `/comment/${body.id}/create`,
        method: "POST",
        body,
      }),
    }),
    getAllComment: builder.query({
      query: () => ({
        url: "/comment",
        method: "GET",
      }),
    }),
  }),
});

export const { useCommentMutation,useGetAllCommentQuery } = commentRTK;
