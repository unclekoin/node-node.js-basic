const fs = require('fs');

fs.mkdirSync('./content/dir1');

// Failed because directory content doesn't exixts
try {
  fs.mkdirSync('./parent/dir2');
} catch (err) {
  console.error("Failed because directory content doesn't exixts");
}

// succeeds
fs.mkdirSync('./content/dir2', { recursive: true });
