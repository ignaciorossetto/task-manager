import React from 'react'
import TaskList from '../../components/TaskList'
import { ETaskList } from '../../types/types'

const index = () => {
  return (
    <div>
        <TaskList type={ETaskList.All}/>
    </div>
  )
}

export default index