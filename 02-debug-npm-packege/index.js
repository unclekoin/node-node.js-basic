// DEBUG=express.* node index.js
// DEBUG=express.router.* node index.js

const app = require('express')();
const port = 3000;

app.use((req, res) => res.end('Hello World!'));

app.listen(port);
