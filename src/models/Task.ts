import { StatusEnum } from './StatusEnum'

export default interface Task {
  _id?: string
  name: string
  status: StatusEnum
  priority: string
  description: string
}