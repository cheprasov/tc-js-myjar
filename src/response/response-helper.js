
const ApiError = require('./../error/api-error');

module.exports = {
  responseError(response, error) {
    if (error instanceof ApiError) {
      return response.status(error.getCode())
        .json({ result: false, errors: error.getErrors() }).end();
    }

    console.error(error);

    if (error instanceof SyntaxError) {
      if (error.type === 'entity.parse.failed') {
        return response.status(400).send('Invalid JSON').end();
      }
    }

    return response.status(500).send('Something goes wrong').end();
  },

  responseNotFound(response) {
    response.status(404).send('Not Found').end();
  },
};
