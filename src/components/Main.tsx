import { useEffect, useState } from 'react'
import { AddTask } from './AddTask'
import { TaskList } from './TaskList'
import Task from '../models/Task'

const API_KEY = '9031537'
const BASE_URL = `https://reactexambackend.onrender.com/missions/${API_KEY}`

export const Main = () => {
  const [tasks, setTasks] = useState<Task[]>([])
  const [render, setRender] = useState(1)
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(BASE_URL)
        const tasksRrs = await res.json()
        setTasks(tasksRrs)
        console.log(tasksRrs)
      } catch (err) {
        console.log(err)
        // alert((err as Error).message)
      }
    })()
  }, [render])

  return (
    <div className='main'>
      <AddTask setRender={setRender} />
      <TaskList tasks={tasks} setRender={setRender} />
    </div>
  )
}
