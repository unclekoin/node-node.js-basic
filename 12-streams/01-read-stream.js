const fs = require('fs');

const file = './content/1.txt';

// const readStream = fs.createReadStream(file);

const readStream = fs.createReadStream(file, {
  highWaterMark: 10 // make chnks max size 10 bytes
});

// in this case reading only starts when data eventListener is add
readStream.on('data', (chunk) => {
  console.log(chunk.length);
  console.log(chunk.toString());
});

readStream.on('close', () => {
  console.log('File was closed');
});

readStream.on('error', (error) => {
  console.error(error.message);
});
