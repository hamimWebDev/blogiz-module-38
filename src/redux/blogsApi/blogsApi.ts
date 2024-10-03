import { baseApi } from "../api/baseApi";

const blogsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getBlogs: builder.query({
      query: () => ({
        url: "/blogs",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetBlogsQuery } = blogsApi;
