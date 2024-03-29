
const express = require('express');
const mongoose = require('mongoose');
//const dotenv = require('dotenv');

const jobRoutes = require('./routes/jobapp');

//dotenv.config();

//console.log(process.env.DB_USERNAME, process.env.DB_PASSWORD);

const app = express();
 
mongoose.connect(`mongodb+srv://Nikhitha:nikhitha525@cluster0.smstw85.mongodb.net/`)
 .then(() => {
    console.log("Database Connected successfully");
  })
  .catch((err) => {
    console.log("Database connection failed",err);
  });

app.use(express.json());
app.use("/api/v1/job/", jobRoutes);

app.listen(10000, () => {
  console.log("Server is running at port 10000");
});


