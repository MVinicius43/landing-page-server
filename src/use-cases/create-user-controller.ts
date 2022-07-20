import { Request, Response } from "express";
import { CreateUserUseCase } from "./create-user-use-case";


export class CreateUserController {
  constructor (
    private createUserUseCase: CreateUserUseCase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, contact, company } = request.body
    
    try {
      await this.createUserUseCase.execute({
        name,
        email,
        contact,
        company
      })

      return response.status(201).send()
    } catch (err: any) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}