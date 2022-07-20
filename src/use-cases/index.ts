import { PrismaUsersRepository } from "../repositories/prisma/prisma-users-repository"
import { CreateUserController } from "./create-user-controller"
import { CreateUserUseCase } from "./create-user-use-case"

const prismaUsersRepository = new PrismaUsersRepository()

const createUserUseCase = new CreateUserUseCase(
  prismaUsersRepository
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserUseCase, createUserController }