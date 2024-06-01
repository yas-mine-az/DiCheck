require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const userRoutes = require('../routes/userRoutes');
const medicalRecordRoutes = require('../routes/medicalRecordRoutes');
const articleRoutes = require('../routes/articleRoutes');
const port = 8080;

app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/record", medicalRecordRoutes);
app.use("/api/article", articleRoutes);

app.use((req, res, next) => {
  console.log(req.path, req.method);
  console.log(`Received ${req.method} request to ${req.url}`);
  next();
});

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

module.exports = app; // Tambahkan ini
