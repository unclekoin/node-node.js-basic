const fs = require('fs').promises;

const copyFile = (oldPath, newPath) => {
  return fs
    .readFile(oldPath)
    .then((content) => fs.writeFile(newPath, content))
    .catch(console.error);
};

copyFile(process.argv[2], process.argv[3]).then(
  () => console.log('Copied!'),
  () => console.log('NOT Copied!')
)
