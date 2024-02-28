import { useAppSelector } from '../../app/hooks'
import LandingPage from '../../components/LandingPage'
import TaskForm from '../../components/TaskForm'
import TaskList from '../../components/TaskList'
import { ETaskList } from '../../types/types'

const HomeView = () => {
  const {user} = useAppSelector(store=> store.auth)
  return (
    <div
    className='w-full flex justify-center flex-col items-center'
    >
      {
        user && 
        <>
      
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
          </>
      }
      {
        !user && 
        <LandingPage />
      }
    </div>
  )
}

export default HomeView