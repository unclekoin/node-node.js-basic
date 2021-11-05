const zlib = require('zlib');
const fs = require('fs');
const { pipeline } = require('stream');

const file = './content/1.txt';

pipeline(
  zlib.createGzip(),
  fs.createReadStream(file),
  fs.createWriteStream('./content/out .txt.gz'),
  (error) => {
    if (error) {
      /* ... */
    } else {
      console.log('Finished');
    }
  }
);
// out.txt.gz
