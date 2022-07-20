import express from 'express'
import { createUserController } from './use-cases'

export const routes = express.Router()

routes.post('/users', (request, response) => {
  return createUserController.handle(request, response)
})