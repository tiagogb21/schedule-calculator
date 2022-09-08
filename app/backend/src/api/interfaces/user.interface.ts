export interface IUser {
  name: string,
  email: string,
  role: string,
  password: string
}

export type ILogin = Omit<IUser, 'role' | 'name' >;
