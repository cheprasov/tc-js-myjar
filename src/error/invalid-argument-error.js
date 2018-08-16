const ApiError = require('./api-error');

module.exports = class InvalidArgumentError extends ApiError {
  /**
   * @param {string} message
   * @param {string} field
   */
  constructor(message, field = null) {
    super([{ message, field }], 400);
  }
};
