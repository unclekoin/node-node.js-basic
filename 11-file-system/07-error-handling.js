const fs = require('fs');
const fsPromises = fs.promises;

fs.readFile('./content/10.txt', 'utf-8', (error, file) => {
  if (error) {
    return console.error(error.message);
  }
  console.log(file);
});

fsPromises
  .readFile('./content/10.txt', 'utf-8')
  .then((file) => console.log(file))
  .catch((error) => console.error(error.message));

console.log('Reading file...');

// Reading file...
// ENOENT: no such file or directory, open './content/10.txt'
// ENOENT: no such file or directory, open './content/10.txt'
