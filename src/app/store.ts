import { configureStore } from "@reduxjs/toolkit"
import { taskSlice } from "../features/tasks/taskSlice"
import { authSlice } from "../features/auth/authSlice"
import { tasksApi } from "../api/tasksAPI"
import { authApi } from "../api/authAPI"

export const store = configureStore({
  reducer: {
    [taskSlice.reducerPath]: taskSlice.reducer,
    [authSlice.reducerPath]: authSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(authApi.middleware)
      .concat(tasksApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
