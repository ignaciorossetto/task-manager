import { useNavigate } from "react-router-dom"
import { useAppDispatch } from "../app/hooks"
import { addTask } from "../features/tasks/taskSlice"
import type { Task, TaskFormPropsType } from "../types/types"


const TaskForm: React.FC<TaskFormPropsType> = ({redirect=false}) => {
    const navigate = useNavigate()
    const getControl = (control: any) => {
        const isControl = control instanceof HTMLInputElement
        if(!isControl || control == null) return null
        return control
    }
    const dispatch = useAppDispatch()
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const {elements} = e.currentTarget
        const input = elements.namedItem('title')
        const isInput = input instanceof HTMLInputElement
        const desc = elements.namedItem('description')
        const isDesc = desc instanceof HTMLTextAreaElement
        if (!isInput || input == null) return
        if (!isDesc || input == null) return
        const newTask: Task = {
            id: crypto.randomUUID(),
            title: input.value,
            completed: false,
            description: desc.value,
            timeStamp: new Date()
        }
        dispatch(addTask(newTask))
        input.value = ''
        desc.value = ''
        redirect && navigate('/')
    }

  return (
    <form
    className="flex flex-col gap-5 h-fit w-[500px] mt-10 border-2 p-10 border-black rounded-xl"
    onSubmit={handleSubmit}
    >
        <h1
        className="text-center text-3xl "
        >Create a new task!</h1>
        <input 
        required
        className="p-3 border-2 border-black"
        type="text" 
        name="title" 
        placeholder="Title..."/>
        <textarea 
        rows={5}
        className="p-3 border-2 border-black"
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