import { IUser } from "../../users/interfaces/user";

export interface IRegisterRequest {
  name: string;
  email: string;
  password: string;
  phone: string;
  avatarUrl?: string
}

export interface IRegisterResponse {
  token: string;
  refreshToken: string;
  user: IUser;
}