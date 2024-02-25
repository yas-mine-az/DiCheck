const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point aplikasi
  output: {
    path: path.resolve(__dirname, 'dist'), // Direktori output
    filename: 'bundle.js' // Nama file output
  }
};
