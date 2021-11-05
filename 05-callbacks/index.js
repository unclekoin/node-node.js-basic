// error-fires pattern
const fs = require('fs');

function copyFile(oldFilePath, newFilePatn, callback) {
  fs.readFile(oldFilePath, (error, fileContent) => {
    if (error) {
      console.error(error);
      callback(error);
      return;
    }

    fs.writeFile(newFilePatn, fileContent, (error) => {
      if (error) {
        console.error(error);
        callback(error);
        return;
      }
      callback(null);
    });
  });
}

copyFile(process.argv[2], process.argv[3], (error) => {
  if (!error) {
    console.log('File was copied.');
  } else {
    console.log("File wasn't copied");
  }
});
