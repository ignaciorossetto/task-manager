import TaskForm from '../../components/TaskForm'
import TaskList from '../../components/TaskList'
import { ETaskList } from '../../types/types'

const HomeView = () => {
  return (
    <div
    className='w-full flex justify-center flex-col items-center'
    >
      
      <div className='flex justify-around container'>
        <div>
          <TaskList type={ETaskList.Incomplete}/>
        </div>
        <div
        className='hidden md:block'
        >
          <TaskForm />
        </div>
      </div>
    </div>
  )
}

export default HomeView