import { UsersRepository } from '../repositories/users-repository'
import { ICreateUserRequestDTO } from './create-user-DTO';

export class CreateUserUseCase {
  constructor (
    private userRepository: UsersRepository
  ) {}

  async execute(request: ICreateUserRequestDTO) {
    const { name, email, contact, company } = request

    if (!name) {
      throw new Error('Name is require.')
    }

    if (!email) {
      throw new Error('Email is require.')
    }

    if (!contact) {
      throw new Error('Contact is require.')
    }

    if (!company) {
      throw new Error('Company is require.')
    }

    await this.userRepository.create({
      name,
      email,
      contact,
      company,
    })
  }
}