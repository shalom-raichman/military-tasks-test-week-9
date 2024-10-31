import TaskModel from '../models/Task'

interface Props {
  task: TaskModel
}

export const Task = ({ task }: Props) => {
  return (
    <div className='task'>
      <p>Name: {task.name}</p>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>
      <p>Description: {task.description}</p>
      <button>Progres</button>
      <button>Delete task</button>
    </div>
  )
}
