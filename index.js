const express = require('express')
const mongoose = require('mongoose');


const jobRoutes = require('./routes/jobapp');
const app=express()

//mongoose.connect("mongodb+srv://Nikhitha:vijaya5566@V@cluster0.k5t1n1b.mongodb.net/")
mongoose.connect("mongodb+srv://Nikhitha:vijaya5566%40V@cluster0.k5t1n1b.mongodb.net/")

.then(()=>{
    console.log("Database Connected successfully");
})
.catch((err)=>{
    console.log("Database conncetion failed");
})

app.use(express.json());
app.use("/api/v1/job/",jobRoutes);


app.listen(10000,()=>{
    console.log("server running at port 10000");
});



