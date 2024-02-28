import { createSlice } from "@reduxjs/toolkit"
import type { Task } from "../../types/types"

const INITIAL_STATE: Task[] = []

export const taskSlice = createSlice({
  name: "tasks",
  initialState: INITIAL_STATE,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload)
    },
    deleteTask: (state, action) => {
      return state.filter(e => e._id !== action.payload._id)
    },
    toggleComplete: (state, action) => {
      const index = state.findIndex(e => e._id === action.payload._id)
      state[index].completed = !state[index].completed
      if (state[index].completed) {
        state[index].completedTimeStamp = new Date()
      }
      return state
    },
  },
})

export const { addTask, deleteTask, toggleComplete } = taskSlice.actions

export default taskSlice.reducer
