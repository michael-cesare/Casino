const fs = require('fs');
const path = require('path');

console.log('hit server');

const fileName = './public/config.json';

fs.readFile(path.resolve(__dirname, fileName),
  (err, config) => {
    if (err) {
      // This error should crash whole process
      throw new Error(`-> Couldn't find config.json file`);
    } else {
      const app = require('./src/app');
      app.startServer(config);
    }
});
