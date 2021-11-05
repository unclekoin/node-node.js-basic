const fs = require('fs');

const fileData = 'lorem ipsum';

fs.writeFileSync('./content/2.txt', fileData, 'utf-8');

console.log(fs.readFileSync('./content/2.txt', 'utf-8'));
console.log(fs.readFileSync('./content/2.txt')); // <Buffer 4c 6f 72 65 6d 20 69 70 73 75 6d>

const buffer = Buffer.from([
  0x6c, 0x6f, 0x72, 0x65, 0x6d, 0x20, 0x69, 0x70, 0x73, 0x75, 0x6d,
]);

fs.writeFileSync('./content/from-buffer.txt', buffer); // lorem ipsum

console.log(fs.readFileSync('./content/from-buffer.txt', 'utf-8'));
