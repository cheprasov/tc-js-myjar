const express = require('express');
const expressValidator = require('express-validator');
const routes = require('./routes/routes');
const responseHelper = require('./response/response-helper');
const auth = require('./auth/auth');

const app = express();

app.use(expressValidator());
app.use(auth.authorize);

routes.map(route => app.use(route.prefix, route.router));

// catch errors and forward to error handler
app.use((error, request, response, next) => {
  responseHelper.responseError(response, error);
});

// Page not found
app.use((request, response, next) => {
  responseHelper.responseNotFound(response);
});

module.exports = app;
