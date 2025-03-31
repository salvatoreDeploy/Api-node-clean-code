import { MissingParamError } from '../../errors/missing-param-error'
import { badRequest } from '../../helpers/http-helper'
import type { Controller } from '../../protocols/controllers'
import type { HttpRequest, HttpResponse } from '../../protocols/http'

export class SignUpController implements Controller {
  handle(httpRequest: HttpRequest): HttpResponse {
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

    return {
      statusCode: 0,
      body: undefined,
    }
  }
}
