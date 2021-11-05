const fs = require('fs');

const fileContent1 = fs.readFileSync('./content/1.txt', 'utf-8');
console.log(fileContent1);

const fileContent2 = fs.readFileSync('./content/1.txt');
console.log(fileContent2); // <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 21>
console.log(fileContent2.toString()); // Hello World!
