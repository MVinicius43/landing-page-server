import { prisma } from "../../prisma";
import { UserCreateData, UsersRepository } from '../users-repository'

export class PrismaUsersRepository implements UsersRepository {
  async create({ name, email, contact, company }: UserCreateData) {
    await prisma.user.create({
      data: {
        name,
        email,
        contact,
        company,
      }
    })
  }
}