const fs = require('fs');

// Check if the file exists in the current directory
const stats = fs.statSync('./01-read-file-sync.js')

console.log(`Is symbolic link? ${stats.isSymbolicLink()}`)
console.log(`Is directory? ${stats.isDirectory()}`)
console.log(`Is file? ${stats.isFile()}`)
console.log(`Created at: ${stats.birthtimeMs}`)