/* eslint-disable @typescript-eslint/no-explicit-any */

import { MissingParamError } from '../../errors/missing-param-error'
import { badRequest } from '../../helpers/http-helper'
import type { HttpRequest, HttpResponse } from '../../protocols/http'

/* eslint-disable @typescript-eslint/no-unused-vars */
export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requiredFieldds = ['name', 'email']

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
