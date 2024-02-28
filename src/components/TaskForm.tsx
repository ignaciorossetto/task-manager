import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../app/hooks"
import { addTask } from "../features/tasks/taskSlice"
import type { INewTask, Task, TaskFormPropsType } from "../types/types"
import { useAddNewTaskMutation } from "../api/tasksAPI"
import toast from "react-hot-toast"


const TaskForm: React.FC<TaskFormPropsType> = ({ redirect = false }) => {
    const { user } = useAppSelector(state => state.auth)
    const [addNewTask, data] = useAddNewTaskMutation()
    const navigate = useNavigate()
    const getControl = (control: any) => {
        const isControl = control instanceof HTMLInputElement
        if(!isControl || control == null) return null
        return control
    }
    const dispatch = useAppDispatch()
    const handleSubmit = async(e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const {elements} = e.currentTarget
        const input = elements.namedItem('title')
        const isInput = input instanceof HTMLInputElement
        const desc = elements.namedItem('description')
        const isDesc = desc instanceof HTMLTextAreaElement
        if (!isInput || input == null) return
        if (!isDesc || input == null) return
        const newTask: INewTask = {
            title: input.value,
            description: desc.value,
            ownerId: user!._id
        }
        try {
            await addNewTask(newTask)
            input.value = ''
            desc.value = ''
            toast.success('Task created successfully')
            redirect && navigate('/')
        } catch (error) {
            toast.error('Try again later')
        }
    }

  return (
    <form
    className="flex flex-col gap-5 h-fit w-[500px] mt-10 p-10 ck rounded-xl bg-white/85 shadow-xl "
    onSubmit={handleSubmit}
    >
        <h1
        className="text-center text-3xl "
        >Create a new task!</h1>
        <input 
        required
        className="p-3 border-2 border-black placeholder:text-black placeholder:font-semibold placeholder:italic"
        type="text" 
        name="title" 
        placeholder="Title..."/>
        <textarea 
        rows={5}
        className="p-3 border-2 border-black placeholder:text-black placeholder:font-semibold placeholder:italic"
        name="description" 
        placeholder="Description..."
        />
        <button
        className="btn-animation bg-green-300 !rounded-none font-semibold text-xl"
        >Save</button>
    </form>
  )
}

export default TaskForm