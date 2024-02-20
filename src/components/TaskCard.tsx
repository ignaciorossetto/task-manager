import { useAppDispatch } from "../app/hooks"
import { deleteTask, toggleComplete } from "../features/tasks/taskSlice"
import type { Task } from "../types/types"
import { MdDelete, MdDone } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const TaskCard = (props: Task) => {
  const dispatch = useAppDispatch()
  const handleDeleteTask = () => {
    dispatch(deleteTask({
      id:props.id
    }))
  }
  const handleToggleComplete = () => {
    dispatch(toggleComplete({
      id:props.id
    }))
  }

  return (
    <div
    className="p-5 flex flex-col justify-between border-2 rounded-xl shadow-2xl min-h-[175px] w-[250px]"
    >
    <div className="flex flex-col gap-2">
      <h3
      className="font-semibold text-[20px] max-h-fit text-pretty break-words"
      >{props.title}</h3>
      <p
      className="text-[16px] italic text-black/45 text-pretty break-words"
      >{props.description}</p>
      <div
      className="flex flex-col mb-3"
      >
        <p
        className="text-[14px] italic text-black/45 text-pretty break-words"
        >Creada: {props.timeStamp.toLocaleString()}</p>
        {
          props.completed && props.completedTimeStamp &&
          <p
          className="text-[14px] italic text-black/45 text-pretty break-words"
          >
            Completed: {props.completedTimeStamp.toLocaleString()}
          </p>
        }
      </div>
    </div>
      <div
        className="w-full flex justify-between"
        >
          {

        <button
        onClick={handleToggleComplete}
        className={`
        btn-animation btn-custom ${props.completed ? 'bg-yellow-400' : 'bg-green-300'}
        !px-3
        `}
        >
          {props.completed ? <RxCross2 size={20}/> : <MdDone size={20}/>}
        </button>

          }
        <button
        onClick={handleDeleteTask}
        className="btn-animation btn-custom bg-red-300 !px-3"
        >
          <MdDelete size={20}/>
        </button>
        </div>
      </div>
  )
}

export default TaskCard