import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { ISignUpForm } from "../types/types"

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BACKEND_URL,
})

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery,
  endpoints: builder => ({
    login: builder.mutation({
      query: loginForm => ({
        url: `/api/auth`,
        method: "POST",
        body: loginForm,
      }),
    }),
    signUp: builder.mutation({
      query: (userData: ISignUpForm) => ({
        url: "/api/user/sign-up",
        method: "POST",
        body: userData,
      }),
    }),
  }),
})

export const { useLoginMutation, useSignUpMutation } = authApi
