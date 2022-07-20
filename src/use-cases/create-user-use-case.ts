import { MailAdapter } from '../adapters/mail-adapter';
import { UsersRepository } from '../repositories/users-repository'
import { ICreateUserRequestDTO } from './create-user-DTO';

export class CreateUserUseCase {
  constructor (
    private userRepository: UsersRepository,
    private mailAdapter: MailAdapter
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

    await this.mailAdapter.sendMail({
      subject: 'Novo usuário cadastrado em sua Landing Page',
      body: [
        `<div style="font-family: sans-serif; font-size: 16px; color: #111">`,
        `<p>O usuário ${name} se inscreveu em sua Landing Page.</p>`,
        `<p>Segue abaixo os dados:</p>`,
        `<p>Nome: ${name}</p>`,
        `<p>Email: ${email}</p>`,
        `<p>Contato: ${contact}</p>`,
        `<p>Empresa em que atua: ${company}</p>`,
        `</div>`
      ].join('\n')
    })
  }
}