module.exports = class ApiError extends Error {
  /**
   * @param {array} errors
   * @param {int} code
   */
  constructor(errors, code = 500) {
    super();
    this.errors = errors;
    this.code = code;
  }

  /**
   * @return {int}
   */
  getCode() {
    return this.code;
  }

  /**
   * @return {array}
   */
  getErrors() {
    return this.errors;
  }
};
