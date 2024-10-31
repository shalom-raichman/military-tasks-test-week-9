import { useEffect, useState } from 'react'
import Task from '../models/Task'
import { StatusEnum } from '../models/StatusEnum'
import { PriorityEnum } from '../models/PriorityEnum'

interface Props {
  setRender: (x: number) => void
}

const API_KEY = '9031537'
const BASE_URL = `https://reactexambackend.onrender.com/missions/${API_KEY}`

export const AddTask = ({ setRender }: Props) => {
  const [task, setTask] = useState<Task>()
  const [name, setName] = useState<string>('')
  const [status, setStatus] = useState<StatusEnum>(StatusEnum.Pending)
  const [priority, setPriority] = useState<PriorityEnum>(PriorityEnum.Low)
  const [description, setDescription] = useState<string>('')
  const handelAddTask = () => {
    const taskToAdd: Task = {
      name,
      status,
      priority,
      description
    }
    setTask(taskToAdd)
  }

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(`${BASE_URL}`, {
          method: 'POST',
          body: JSON.stringify(task),
          headers: { 'Content-Type': 'application/json' }
        })
        const taskDits = await res.json()
        setRender(Math.random())
      } catch (err) {
        alert((err as Error).message)
        console.log(err)
      }
    })()
  }, [task])



  return (
    <div className='add-task'>
      <h1>Military Opration Dashboard</h1>
      <input onChange={e => setName(e.target.value)} type="text" placeholder='Name' />
      <select onChange={e => setStatus(e.target.value as StatusEnum)}>
        {/* <option value={StatusEnum.Pending} defaultChecked disabled>Status</option> */}
        <option value={StatusEnum.Pending} defaultChecked>{StatusEnum.Pending}</option>
        <option value={StatusEnum.InProgress}>{StatusEnum.InProgress}</option>
        <option value={StatusEnum.Completed}>{StatusEnum.Completed}</option>
      </select>
      <select onChange={e => setPriority(e.target.value as PriorityEnum)}>
        {/* <option value={PriorityEnum.Low} defaultChecked disabled>Priority</option> */}
        <option value={PriorityEnum.Low} defaultChecked>{PriorityEnum.Low}</option>
        <option value={PriorityEnum.High}>{PriorityEnum.High}</option>
      </select>
      <input onChange={e => setDescription(e.target.value)} type="text" placeholder='Description' />
      <button onClick={handelAddTask}>Add Task</button>
    </div>
  )
}
