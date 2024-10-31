import TaskModel from '../models/Task'
import { Task } from './Task'

interface Props {
  tasks: TaskModel[]
  setRender: (x: number) => void
}


export const TaskList = ({ tasks, setRender }: Props) => {
  return (
    <div className='task-list'>
      <h1>Mission</h1>
      {tasks.map(t => <Task task={t} key={t._id} setRender={setRender} />)}
    </div>
  )
}
