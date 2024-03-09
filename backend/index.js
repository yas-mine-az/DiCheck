const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const app = express();
const port = 3000;

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Connected to db & express app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });