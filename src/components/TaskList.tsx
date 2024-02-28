import { useEffect, useState } from "react"
import { useAppSelector } from "../app/hooks"
import type { Task, TaskListPropsType } from "../types/types"
import { ETaskList } from "../types/types"
import TaskCard from "./TaskCard"
import { useFetchIncompleteTasksQuery } from "../api/tasksAPI"
import LoadingSpinner from "./LoadingSpinner"

const TaskList: React.FC<TaskListPropsType> = ({ type }) => {
  const [taskArray, setTaskArray] = useState<Task[]>([])
  const { user } = useAppSelector(state => state.auth)
  const { data, isLoading, isError, isFetching, isSuccess } =
  useFetchIncompleteTasksQuery(user!._id)
  const tasks = useAppSelector(state => state.tasks)

  return (
    <div className="flex flex-col">
      <h2 className="text-3xl py-5">
        {type === ETaskList.Completed
          ? "Tareas Completas"
          : "Tareas pendientes"}
      </h2>
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-5">
        {isLoading && isFetching && <LoadingSpinner size={25} />}
        {isSuccess && (
          <>
            {data?.length === 0 ? (
              <h3 className="text-xl italic text-black/45">
                No pending tasks!
              </h3>
            ) : (
              data?.map((e: Task) => <TaskCard key={e._id} {...e} />)
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default TaskList
