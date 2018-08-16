// todo: create some real storage for tokens
const tokenStorage = require('./token/token-storage-stub');
const InvalidArgumentError = require('./../error/invalid-argument-error');

const auth = {
  authorize(request, response, next) {
    const token = request.headers.token || null;
    if (!tokenStorage.isCorrectToken(token)) {
      // todo: if token is wrong - mark IP as suspected, and ban after X times
      throw new InvalidArgumentError('Wrong token header', 'token');
    }
    next();
  },
};

module.exports = auth;
