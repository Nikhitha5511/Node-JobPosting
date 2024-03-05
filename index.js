// const express = require('express')
// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// const jobRoutes = require('./routes/jobapp');
// console.log(process.env.DB_USERNAME,process.env.DB_PASSWORD);
// dotenv.config();

// const app=express()

// mongoose.connect("mongodb+srv://<USER>:<PWD>@cluster0.k5t1n1b.mongodb.net/")

// .then(()=>{
//     console.log("Database Connected successfully");
// })
// .catch((err)=>{
//     console.log("Database conncetion failed");
// })

// app.use(express.json());
// app.use("/api/v1/job/",jobRoutes);


// app.listen(10000,()=>{
//     console.log("server running at port 10000");
// });




const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const jobRoutes = require('./routes/jobapp');

dotenv.config();

console.log(process.env.DB_USERNAME, process.env.DB_PASSWORD);

const app = express();
 
mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.xfuaxpw.mongodb.net/`)
 .then(() => {
    console.log("Database Connected successfully");
  })
  .catch((err) => {
    console.log("Database connection failed",err);
  });

app.use(express.json());
app.use("/api/v1/job/", jobRoutes);

app.listen(10000, () => {
  console.log("Server running at port 10000");
});

