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
  username: string;
  password: string;
  email: string;
  role: string;
}

export interface SignupResponseDto {
  id: string;
  username: string;
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
    id: string;
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

      if(typeof window !== "undefined") {
        localStorage.setItem("token", action.payload.token)
        localStorage.setItem("user", JSON.stringify(action.payload.user))
      }
    },
    clearCredentials: (state) => {
      state.token = null;
      state.user = null;

      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
      }
    },
    loadUserFromStorage: (state) => {
      if (typeof window !== "undefined") {
        const storedToken = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        if (storedToken && storedUser) {
          state.token = storedToken;
          state.user = JSON.parse(storedUser);
        }
      }
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

export const { setCredentials, clearCredentials, loadUserFromStorage } = authSlice.actions;
export default authSlice.reducer;
export const { useLoginMutation, useSignupMutation } = authApi;
