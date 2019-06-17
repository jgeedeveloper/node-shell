const fs = require('fs');

module.exports = function cat(file) {
    fs.readFile(file, (err, file) => {
        if (err) {
          throw err;
        } else {
          process.stdout.write(file);
          process.stdout.write('\nprompt > ');
        }
      });
}