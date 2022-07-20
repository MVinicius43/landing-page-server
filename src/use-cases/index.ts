import { NodemailerMailAdapter } from "../adapters/nodemailer/nodemailer-mail-adapter"
import { PrismaUsersRepository } from "../repositories/prisma/prisma-users-repository"
import { CreateUserController } from "./create-user-controller"
import { CreateUserUseCase } from "./create-user-use-case"

const prismaUsersRepository = new PrismaUsersRepository()
const nodemailerMailAdapter = new NodemailerMailAdapter()

const createUserUseCase = new CreateUserUseCase(
  prismaUsersRepository,
  nodemailerMailAdapter,
)

const createUserController = new CreateUserController(
  createUserUseCase
)

export { createUserUseCase, createUserController }