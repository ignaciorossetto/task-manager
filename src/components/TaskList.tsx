import { useEffect, useState } from "react"
import { useAppSelector } from "../app/hooks"
import type { Task, TaskListPropsType } from "../types/types"
import { ETaskList } from "../types/types"
import TaskCard from "./TaskCard"

const TaskList: React.FC<TaskListPropsType> = ({type}) => {
    const [taskArray, setTaskArray] = useState<Task[]>([])

    const tasks = useAppSelector(state => state.tasks)

    useEffect(()=> {
        switch (type) {
            case ETaskList.Completed:
                return setTaskArray(tasks.filter(task => task.completed))
            case ETaskList.Incomplete:
                return setTaskArray(tasks.filter(task => !task.completed))
            // case ETaskList.All:
            //     return setTaskArray(tasks)
            default:
              return setTaskArray(tasks);
          }
    }, [tasks])

    

  return (
    <div
    className="flex flex-col"
    >
    <h2
    className="text-3xl py-5"
    >
        {
            type === ETaskList.Completed ? 'Tareas Completas' : 'Tareas pendientes' 
        }
    </h2>
    <div
    className="grid grid-cols-1 xl:grid-cols-3 gap-5"
    >
      {taskArray.length === 0 ? <h3 className="text-xl italic text-black/45">No pending tasks!</h3>:

        taskArray.map((e: Task)=> 
        <TaskCard 
        key={e.id}
        {...e}
        />
        )

      }

    </div>
    </div>
  )
}

export default TaskList
