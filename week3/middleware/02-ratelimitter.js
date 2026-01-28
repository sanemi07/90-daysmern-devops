const request = require('supertest');
const assert = require('assert');
const express = require('express');
const app = express();

let numberOfRequestsForUser = {};

setInterval(() => {
  numberOfRequestsForUser = {};
}, 1000);

function rateLimiter(req, res, next) {
  const userId = req.headers['user-id'];

  // initialize if user not seen in this second
  if (!numberOfRequestsForUser[userId]) {
    numberOfRequestsForUser[userId] = 1;
    return next();
  }

  // increment count
  numberOfRequestsForUser[userId]++;

  // block if limit exceeded
  if (numberOfRequestsForUser[userId] > 5) {
    return res.status(404).send('limit exceeded');
  }

  next();
}

app.use(rateLimiter);

app.get('/user', function(req, res) {
  res.status(200).json({ name: 'john' });
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;
