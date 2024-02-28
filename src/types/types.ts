export type Task = {
  _id: string
  title: string
  description?: string
  completed: boolean
  createdAt: Date
  completedTimeStamp?: Date | null
}

export enum ETaskList {
  Completed = "completed",
  Incomplete = "incomplete",
  All = "all",
}

export type TaskListPropsType = {
  type: ETaskList
}

export type TaskFormPropsType = {
  redirect?: boolean
}

export interface ILoginForm {
  email: string
  password: string
}

export type LoadingSpinnerProps = {
  size?: number
}

export interface IUser {
  _id: string
  fullName: string
  role: number
  email: string
  confirmed: boolean
}

export interface INewTask {
  ownerId: string
  title: string
  description: string
}

export interface ISignUpForm {
  fullName: string
  email: string
  password: string
  confirm_email: string
  confirm_password: string
}
