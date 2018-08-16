const Wiplala = require('./../../../lib/aws.stub');
const periodHelper = require('./../../period/period-helper');
const InvalidArgumentErrors = require('./../../error/invalid-argument-errors');
const InvalidArgumentError = require('./../../error/invalid-argument-error');

module.exports = {
  puppify(request, response, next) {
    request.check('name', 'Invalid name').isLength({ min: 3 });
    request.check('breed', 'Invalid breed').isLength({ min: 3 });
    request.check('kind', 'Invalid kind type').equals('dog');
    request.check('lat', 'Invalid lat').isFloat();
    request.check('lon', 'Invalid lon').isFloat();

    if (request.validationErrors()) {
      throw new InvalidArgumentErrors(request.validationErrors());
    }

    const data = {
      lat: request.body.lat,
      lon: request.body.lon,
      name: request.body.name,
      breed: request.body.breed,
      kind: request.body.kind,
    };

    Wiplala.puppify(data).then((result) => {
      response.json(result).end();
    }).catch(error => next(error));
  },

  unpuppify(request, response, next) {
    request.check('name', 'Invalid name').isLength({ min: 3 });
    request.check('breed', 'Invalid breed').isLength({ min: 3 });
    request.check('kind', 'Invalid kind type').equals('puppy');
    request.check('lat', 'Invalid lat').isFloat();
    request.check('lon', 'Invalid lon').isFloat();

    if (request.validationErrors()) {
      throw new InvalidArgumentErrors(request.validationErrors());
    }

    const data = {
      lat: request.body.lat,
      lon: request.body.lon,
      name: request.body.name,
      breed: request.body.breed,
      kind: request.body.kind,
    };

    Wiplala.unpuppify(data).then((result) => {
      response.json(result).end();
    }).catch(error => next(error));
  },

  peaks(request, response, next) {
    // I know about json scheme, but I can use here fast validation
    const puppies = request.body.puppies || null;
    if (!puppies || !puppies.length) {
      throw new InvalidArgumentError('Wrong JSON request', 'puppies');
    }

    const visits = [];
    request.body.puppies.forEach((puppy) => {
      visits.push(...(puppy.visits || []));
    });

    visits.map((visit) => {
      if (!/^\d{2}:\d{2}-\d{2}:\d{2}$/.test(visit)) {
        throw new InvalidArgumentError('Wrong JSON request', 'visits');
      }
    });

    const peak = periodHelper.getIntersectPeriods(visits);

    const answer = {
      result: 'safety',
      dangerPeriods: [], // All ranges when three or more puppies are visiting the playground
      peakVisitors: peak.max, // Maximum number of puppies visiting at once
    };

    if (peak.max >= 3) {
      answer.result = 'danger!';
      Object.entries(peak.periods).forEach((intersect) => {
        const count = +intersect[0];
        const periods = intersect[1];
        if (count >= 3) {
          answer.dangerPeriods.push(...periods);
        }
      });
      answer.dangerPeriods.sort();
      // todo: add concatenation of periods,
      // example: "11:00-13:20" + "13:20-13:30" => "11:00-13:30"
    }

    response.json(answer).end();
  },
};

