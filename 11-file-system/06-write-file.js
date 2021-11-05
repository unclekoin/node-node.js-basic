const fs = require('fs');

const fileData = 'lorem ipsum';

fs.writeFile('./content/3.txt', fileData, 'utf-8', (error) => {
  if (error) {
    return console.error(error.message);
  };
  console.log('File has been written');
});
