import { StatusEnum } from '../models/StatusEnum'
import TaskModel from '../models/Task'

const API_KEY = '9031537'
const BASE_URL = `https://reactexambackend.onrender.com/missions/${API_KEY}/`

interface Props {
  task: TaskModel
  setRender: (x: number) => void

}

export const Task = ({ task, setRender }: Props) => {
  const handelProgres = () => {
    (async () => {
      try {
        const res = await fetch(`${BASE_URL}progress/${task._id}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' }
        })
        const resJson = await res.json()
        alert(resJson.name + " updated")
        if (!res.ok) throw new Error("task not deleted")

        setRender(Math.random())
      } catch (err) {
        console.log(err)
      }
    })()
  }

  const handelDelete = () => {
    (async () => {
      try {
        const res = await fetch(`${BASE_URL}${task._id}`, { method: 'DELETE' })
        const resJson = await res.json()
        alert(resJson.name + " deleted")
        if (!res.ok) throw new Error("task not deleted")

        setRender(Math.random())
      } catch (err) {
        console.log(err)
      }
    })()
  }

  return (
    <div className={`task 
    ${task.status == StatusEnum.Pending && 'task-pending'}
    ${task.status == StatusEnum.InProgress && 'task-in-progres'}
    ${task.status == StatusEnum.Completed && 'task-completed'}`}>
      <p>Name: {task.name}</p>
      <p>Status: {task.status}</p>
      <p>Priority: {task.priority}</p>
      <p>Description: {task.description}</p>
      {task.status != StatusEnum.Completed && <button onClick={handelProgres}>Progres</button>}
      <button onClick={handelDelete}>Delete task</button>
    </div>
  )
}
