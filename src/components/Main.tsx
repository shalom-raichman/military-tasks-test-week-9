import { AddTask } from './AddTask'
import { TaskList } from './TaskList'

export const Main = () => {
  return (
    <div className='main'>
      <AddTask/>
      <TaskList/>
    </div>
  )
}
