import HttpResponse from '../../helpers/http-response.js';

export default class LoginRouter {
  route(httpRequest: any) {
    if (!httpRequest || !httpRequest.body) return HttpResponse.serverError('d');

    const { email, password } = httpRequest.body;

    if (!email) {
      return HttpResponse.badRequest('email');
    }
    if (!password) {
      return HttpResponse.badRequest('password');
    }
  }
}
