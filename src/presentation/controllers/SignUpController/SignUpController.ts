/* eslint-disable @typescript-eslint/no-explicit-any */

import { MissingParamError } from '../../errors/missing-param-error'
import type { HttpRequest, HttpResponse } from '../../protocols/http'

/* eslint-disable @typescript-eslint/no-unused-vars */
export class SignUpController {
  handle(httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new MissingParamError('name'),
      }
    }

    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new MissingParamError('email'),
      }
    }

    return {
      statusCode: 0,
      body: undefined,
    }
  }
}
