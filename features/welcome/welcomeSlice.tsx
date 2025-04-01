import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const welcomeApi = createApi({
  reducerPath: "welcomeApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001",
    prepareHeaders: (headers) => {
        // Only try to get the token on client-side
        if (typeof window !== 'undefined') {
          const token = localStorage.getItem('token');
          if (token) {
            headers.set('Authorization', `Bearer ${token}`);
          }
        }
        return headers;
      },

  }),
  endpoints: (builder) => ({
    getUserCompany: builder.query({
      query: ({ email }) => `/users/email/${email}/companies`,
    }),
    registerCompany: builder.mutation({
      query: (company) => ({
        url: "/companies",
        method: "POST",
        body: company,
      }),
    }),
  }),
});

export default welcomeApi.reducer;
export const { useGetUserCompanyQuery, useRegisterCompanyMutation } = welcomeApi;

// http://localhost:3001/users/email/theo@gmail.com/companies
