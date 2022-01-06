const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'pug');
app.use(express.static('dist'));
app.use(require('./routes'));

async function main() {
  try {
    await mongoose.connect(process.env.MONGODB_STRING);
    app.listen(5000);
  } catch (e) {
    {
      console.error(e);
      process.exit(1);
    }
  }
}

main();
