import TaskList from '../../components/TaskList'
import { ETaskList } from '../../types/types'

const index = () => {
  return (
    <div>
        <TaskList type={ETaskList.Completed} />
    </div>
  )
}

export default index