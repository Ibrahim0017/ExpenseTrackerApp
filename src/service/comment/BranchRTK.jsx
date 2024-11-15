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
  reducerPath: "comment",
  endpoints: (builder) => ({
    comment: builder.mutation({
      query: (body) => ({
        url: `/comment/${body.id}/create`,
        method: "POST",
        body,
      }),
      invalidatesTags: ['comment']
    }),
    getAllComment: builder.query({
      query: () => ({
        url: "/comment",
        method: "GET",
      }),
      prepareHeaders:['comment']
    }),
  }),
});

export const { useCommentMutation,useGetAllCommentQuery } = commentRTK;
