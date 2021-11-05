const fs = require('fs');
const path = require('path');

// const filepath = path.join(__dirname, './content/1.txt');

// const fileContent = fs.readFileSync(filepath, 'utf-8');

// console.log(fileContent);

let fileContent;
try {
  // Using relative paths directly is dangerous because it is relative to the CWD and not to this module.
  fileContent = fs.readFileSync('./content/1.txt', 'utf-8');
  console.log(fileContent);
} catch (error) {
  console.error('Error reading file, use path module');
}

// __dirname is a special variable with the path of the module
const filepath = path.resolve(__dirname, './content/1.txt');

console.log(filepath);

fileContent = fs.readFileSync(filepath, 'utf-8');

console.log(fileContent);
