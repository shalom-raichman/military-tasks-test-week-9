import TaskModel from '../models/Task'
import { Task } from './Task'

interface Props {
  tasks: TaskModel[]
}

export const TaskList = ({ tasks }: Props) => {
  return (
    <div className='task-list'>
      {tasks.map(t => <Task task={t} key={t.id}/>)}
    </div>
  )
}
