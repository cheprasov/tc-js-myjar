const ApiError = require('./api-error');

module.exports = class InvalidArgumentErrors extends ApiError {
  /**
   * @param {[{msg: string, param: string}]} errors
   */
  constructor(errors) {
    super(errors.map(({ msg: message, param: field }) => ({ message, field })), 400);
  }
};
