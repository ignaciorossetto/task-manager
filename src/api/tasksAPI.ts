import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { RootState } from "../app/store"
import type { Task } from "../types/types"
import { buildErrorMessage } from "vite"

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_BACKEND_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token
    if (token) {
      headers.set("Authorization", `Bearer ${token}`)
    }
    return headers
  },
})

export const tasksApi = createApi({
  reducerPath: "tasksApi",
  baseQuery,
  tagTypes: ["Task"],
  endpoints: builder => ({
    fetchIncompleteTasks: builder.query({
      query: userId => ({
        url: `/api/task/all/${userId}`,
        method: "GET",
      }),
      providesTags: ["Task"],
      transformResponse: (response: { payload?: Task[] }) => {
        const data: Task[] = response.payload || []
        console.log(data)
        return data.filter((e: Task) => e.completed === false)
      },
    }),
    fetchCompletedTasks: builder.query({
      query: userId => ({
        url: `/api/task/all/${userId}`,
        method: "GET",
      }),
      providesTags: ["Task"],
      transformResponse: (response: { payload?: Task[] }) => {
        const data: Task[] = response.payload || []
        console.log(data)
        return data.filter((e: Task) => e.completed === true)
      },
    }),
    addNewTask: builder.mutation({
      query: newTask => ({
        url: `/api/task`,
        method: "POST",
        body: newTask,
      }),
      invalidatesTags: ["Task"],
    }),
    fetchOneTask: builder.query({
      query: taskId => ({
        url: `/api/task/one/${taskId}`,
        method: "GET",
      }),
    }),
  }),
})

export const {
  useFetchIncompleteTasksQuery,
  useFetchCompletedTasksQuery,
  useFetchOneTaskQuery,
  useAddNewTaskMutation,
} = tasksApi
