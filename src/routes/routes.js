const apiRouter = require('./api');

module.exports = [
  {
    prefix: '/api/v1',
    router: apiRouter,
  },
];
