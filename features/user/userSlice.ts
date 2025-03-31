// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { drivers } from "@/utils/app_data";
// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { headers } from "next/headers";
// export const getUsersContent = createAsyncThunk("/Users/content", async () => {
//   const response = await axios.get("/api/users?page=2", {});
//   return drivers;
// });

// interface User {
//   id: number;
//   name: string;
//   email: string;
//   role: string;
// }

// interface RegisterRequest {
//     name: string;
//     email: string;
//     password: string;
//     role: string;
//   }

//   interface LoginRequest {
//     email: string;
//     password: string;
//   }


//   interface AuthResponse {
//     user: User;
//     token: string;
//   }

//   export const authApi = createApi({
//     reducerPath: 'authApi',
//     baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/', }),
//     tagTypes: ['Auth'],
//     endpoints: (builder) => ({
//       register: builder.mutation<any, RegisterRequest>({
//         query: (credentials) => ({
//           url: 'users',
//           method: 'POST',
//           body: credentials,
//         }),
//         // transformResponse: (response: AuthResponse) => {
//         //   localStorage.setItem('token', response.token);
//         //   return response;
//         // },
//       }),
//       login: builder.mutation<AuthResponse, LoginRequest>({
//         query: (credentials) => ({
//           url: 'auth/login',
//           method: 'POST',
//           body: credentials,
//         }),
//         transformResponse: (response: any) => {
//           localStorage.setItem('token', response.token);
//           return response;
//         },
//       }),
//      }),
//   });
 
// export const  {useLoginMutation, useRegisterMutation} = authApi
// export default authApi.reducer;