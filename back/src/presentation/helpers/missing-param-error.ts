export default class MissingParamError extends Error {
  constructor(paramName: string) {
    super(paramName);
    this.name = 'MissingParamError';
  }
}
