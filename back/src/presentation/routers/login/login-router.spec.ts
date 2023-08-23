import HttpResponse from '../../helpers/http-response.js';
import LoginRouter from './login-router.js';
import MissingParamError from '../../helpers/missing-param-error.js';

describe('Login Router ', () => {
  test('Should return 400 if no email is provider', () => {
    const sut = new LoginRouter();
    const httpRequest = {
      body: {
        password: '343234343fd@',
      },
    };
    const httpResponse = sut.route(httpRequest);
    expect(httpResponse?.body).toEqual(new MissingParamError('email'));
  });

  test('Should return 400 if no password is provider', () => {
    const sut = new LoginRouter();
    const httpRequest = {
      body: {
        email: 'lalas@gmail.com',
      },
    };
    const httpResponse = sut.route(httpRequest);
    expect(httpResponse?.body).toEqual(new MissingParamError('password'));
  });

  test('Should return 500 if no httpRequest is provider', () => {
    const sut = new LoginRouter();
    const httpResponse = sut.route(1);
    expect(httpResponse?.statusCode).toBe(500);
  });

  test('Should return 500 if no httpRequest has no body', () => {
    const sut = new LoginRouter();
    const httpResponse = sut.route({});
    expect(httpResponse?.statusCode).toBe(500);
  });
});
