const fs = require('fs');
const { promisify } = require('util');

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

async function copyFile(oldFilePath, newFilePath) {
  try {
    const fileContent = await readFileAsync(oldFilePath);
    await writeFileAsync(newFilePath, fileContent);
  } catch (error) {
    console.error(error);
    throw error;
  }
}

copyFile(process.argv[2], process.argv[3]).then(
  () => console.log('File was copied.'),
  () => console.log("File wasn't copied.")
);
