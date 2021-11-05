const fs = require('fs');

fs.readFile('./content/1.txt', 'utf-8', (error, file) => {
  console.log(file);
});
console.log('Reading file...');

// Reading file...
// Hello World!