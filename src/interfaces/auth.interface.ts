import { IUser } from "./user.interface"

export interface IAuthBody {
  email: string
  password: string
}

export interface IAuthData {
  user: IUser
  accessToken: string
}