const express = require('express');

const app = express();
let errorCount = 0;

app.get('/user', function(req, res) {
  throw new Error("User not found");
});

app.post('/user', function(req, res) {
  res.status(200).json({ msg: 'created dummy user' });
});

app.get('/errorCount', function(req, res) {
  res.status(200).json({ errorCount });
});

// ERROR-HANDLING MIDDLEWARE (must have 4 params)
app.use(function (err, req, res, next) {
  errorCount++;
  res.status(404).json({ error: 'exception error' });
});

app.listen(3001);
