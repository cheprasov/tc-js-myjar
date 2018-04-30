var express = require('express');
var md5 = require('md5');
var Wiplala = require('./lib/aws.stub').Wiplala;

const app = express();
const port = 30000;
const secret = 'ALABAM413';

app.get('/api/v1/puppify/REST/puppifyADog', (req, res) => {
  // Authenticate request -- simple shared password for now.
  if (secret !== req.query._password) {
    console.log('Unauthenticated user with wrong password: ' + req.query.password, req.query);
    return res.status(503).json({
      result: 'forbidden'
    });
  }

  const puppy = {
    kind: 'dog',
    state: 'dog',
    breed: req.query.breed,
    name: req.query.name,
    lat: req.query.lat,
    lon: req.query.lon,
  };

  var result = Wiplala.tinkleMinify({
    kind: puppy.kind,
    breed: puppy.breed,
    name: puppy.name,
    lat: puppy.lat,
    lon: puppy.lon,
  })

  res.json({
    result: result.success ? "200" : "400",
    puppy: {
      kind: puppy.kind,
      state: 'puppy',
      breed: puppy.breed,
      name: cutifyName(puppy.name),
      lat: puppy.lat,
      lon: puppy.lon
    },
  });
});

function cutifyName(name) {
  return `lil name`; // TODO: Return cuter version of dog's name. Algorithm up for implementer to propose.
}


app.listen(port, () => {
  console.log(`Puppify API started up at port ${port}`);
});
