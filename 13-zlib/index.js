const zlib = require('zlib');
const fs = require('fs');

const file = './content/1.txt';

// stream
const gzip = zlib.createGzip(); // dulex stream
const readable = fs.createReadStream(file);
const writable = fs.createWriteStream('./content/out .txt.gz');

// readable.pipe(gzip).pipe(writable) // out.txt.gz

// Handle error
readable
  .pipe(gzip)
  .on('error', () => {
    /* handle error */
  })
  .pipe(writable)
  .on('error', () => {
    /* handle error */
  });
// out.txt.gz
