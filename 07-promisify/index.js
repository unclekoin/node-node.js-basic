const fs = require('fs')

function copyFile(file1, file2) {
  return new Promise((resolve, reject) => {
    fs.copyFile(file1, file2, (err, data) => {
      if (err) return reject(err);
      resolve(data);
    })
  })
}

const promise = copyFile('file.txt', 'newFile.txt');
promise.then(console.log, console.error);