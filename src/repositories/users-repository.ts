export interface UserCreateData {
  name: string
  email: string
  contact: string
  company: string
}

export interface UsersRepository {
  create: (data: UserCreateData) => Promise<void>
}