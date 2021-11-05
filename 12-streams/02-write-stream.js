const fs = require('fs');

// const writable = fs.createWriteStream('./content/2.txt', 'utf-8');

// writable.write('writing some data,');
// writable.write(' writing some more data,');
// writable.end(' last write,');

const writable = fs.createWriteStream('./content/3.txt', 'utf-8');

function writeOneMillionTimes(writer, data, encoding, callback) {
  let i = 1000000;
  write();

  function write() {
    let ok = true;
    do {
      i--;
      if (i === 0) {
        // last time!
        writer.write(data, encoding, callback);
      } else {
        // See ie we should continue, on wait.
        // Don't pass the callback, because we're not done yet.
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);

    if (i > 0) {
      // Had to stop early!
      // Write some more once it drains.
      writer.once('drain', write);
    }
  }
}

writeOneMillionTimes(writable, 'lorem ipsum', 'utf-8', (error) => {
  console.log('Finished!');
});
