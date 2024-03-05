const mongoose = require('mongoose');

const jobSchema={

    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    company:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    },
    salary:{
        type:Number,
        required:true,
        default:0,
    },
}


const jobappModel=mongoose.model("jobes",jobSchema);    //jobes is name of our collection in database
module.exports=jobappModel;
