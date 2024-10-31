import { StatusEnum } from './StatusEnum'

export default interface Task {
  id?: string
  name: string
  status: StatusEnum
  priority: string
  description: string
}