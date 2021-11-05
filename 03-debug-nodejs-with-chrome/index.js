// 1. node --inspect index.js
// 2 . chrome -> devtools click green node icon or enter -> chrome://inspect

// node --inspect-brk index.js

const app = require('express')();
const port = 3000;

// GET /add?a=1&b=2 => 3
app.get('/add', (req, res, next) => {
  const { a, b } = req.query;
  res.send(200, Number(a) + Number(b));
});

app.listen(port);
