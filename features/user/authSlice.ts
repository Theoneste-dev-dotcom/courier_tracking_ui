"use client";

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface LoginBodyDto {
  email: string;
  password: string;
}

export interface LoginResponseDto {
  token: string;
  user: {
    id: string;
    username: string;
    email: string;
    role: string;
  };
}

export interface SignupBodyDto {
  name: string;
  password: string;
  email: string;
  role: string;
}

export interface SignupResponseDto {
  id: string;
  name: string;
  email: string;
  role: string;
}

export enum RoleEnum {
  TALENT = "admin",
  ADMIN = "officer",
  CLIENT = "client",
  DRIVER = "driver",
}

interface AuthState {
  token: string | null;
  user: {
    id?: string;
    username: string;
    email: string;
    role: string;
  } | null;
}

const loadAuthState = (): AuthState => ({
  token: null,
  user: null,
});

const initialState: AuthState = loadAuthState();

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    // : PayloadAction<LoginResponseDto>
    setCredentials: (state, action) => {
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    clearCredentials: (state) => {
      state.token = null;
      state.user = null;
    },
   
  },
});

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001" }),
  endpoints: (builder) => ({
    login: builder.mutation<any, LoginBodyDto>({
      query: (credentials) => ({
        url: "/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    signup: builder.mutation<any, SignupBodyDto>({
      query: (userData) => ({
        url: "/users",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { setCredentials, clearCredentials } = authSlice.actions;
export default authSlice.reducer;
export const selectToken = (state)=> state.auth?.token;
export const { useLoginMutation, useSignupMutation } = authApi;
