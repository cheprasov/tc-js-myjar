const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./../controller/api/dogs-controller');

const parser = bodyParser.json();

const router = express.Router();
router.post('/dogs/puppify', parser, controller.puppify);
router.post('/dogs/unpuppify', parser, controller.unpuppify);
router.post('/dogs/peaks', parser, controller.peaks);

module.exports = router;
