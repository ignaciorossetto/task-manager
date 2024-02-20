import  {createSlice} from '@reduxjs/toolkit'
import type { Task } from '../../types/types'

const INITIAL_STATE: Task[] = [
    {
    id: crypto.randomUUID(),
    title: 'asdasd',
    description: 'alshdjkasd',
    completed: false,
    timeStamp: new Date()
},
    {
    id: crypto.randomUUID(),
    title: 'asdasd',
    description: 'alshdjkasd',
    completed: false,
    timeStamp: new Date()
},
]

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: INITIAL_STATE,
    reducers: {
        addTask: (state, action) => {
            state.push(action.payload)
        },
        deleteTask: (state, action) => {
            return state.filter((e)=> 
                e.id !== action.payload.id
            )
        },
        toggleComplete: (state, action) => {
            const index = state.findIndex((e) => e.id === action.payload.id)
            state[index].completed = !state[index].completed
            if (state[index].completed) {
                state[index].completedTimeStamp = new Date()
            }
            return state
        }
    }
})

export const {addTask, deleteTask, toggleComplete} = taskSlice.actions

export default taskSlice.reducer