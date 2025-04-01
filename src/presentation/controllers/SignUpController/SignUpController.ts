import { InvalidParamError } from '../../errors/invalid-param-error'
import { MissingParamError } from '../../errors/missing-param-error'
import { badRequest, serverError } from '../../helpers/http-helper'
import type { Controller } from '../../protocols/controllers'
import type { EmailValdiator } from '../../protocols/EmailValidator'
import type { HttpRequest, HttpResponse } from '../../protocols/http'

export class SignUpController implements Controller {
  private readonly emailValidator: EmailValdiator

  constructor(emailValidator: EmailValdiator) {
    this.emailValidator = emailValidator
  }

  handle(httpRequest: HttpRequest): HttpResponse {
    try {
      const requiredFieldds = [
        'name',
        'email',
        'password',
        'passwordConfirmation',
      ]

      for (const field of requiredFieldds) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissingParamError(field))
        }
      }

      const isValid = this.emailValidator.isValid(httpRequest.body.email)

      if (!isValid) {
        return badRequest(new InvalidParamError('email'))
      }
    } catch (error) {
      return serverError()
    }

    return {
      statusCode: 200,
      body: 'Sucesso',
    }
  }
}
