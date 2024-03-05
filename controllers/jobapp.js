
const jobappModel=require('../model/jobapp');

const createJob=async(req,res)=>{
    try{

        console.log(req.body);
         // Insert data into the dab for new user job db.jobes.insertOne()
        const newJob=new jobappModel(req.body)  //here we are getting json data of api  from req.body so to save that data into db we use this 
       const insertedJob= await newJob.save();
       console.log(insertedJob);
       
            res.json({
             sucess:true,
             mesaage:'job created succesfully'
            });
    
    }
    catch(err){
        res.status(400).json({
        sucess:false,
        message:'something went wrong',
        })
    }
   
    
}

const getJob=async(req,res)=>{
    const jobList = await jobappModel.find({});
    console.log(jobList);
    res.json({
        sucess:true,
        message:'sample get api',
        results:jobList,
    })

}


const editJob=async(req,res)=>{
console.log(req.body);
await jobappModel.updateOne({_id:req.body._id},{$set:req.body})
res.json({
    sucess:true,
    message:'job edited succesfully',
})
}

const deleteJob=async(req,res)=>{
    try{
        await jobappModel.findByIdAndDelete(req.body._id);
        res.json({
            sucess:true,
            message:'Job deleted succesfully',
        });

    }
    catch(err){
        res.status(500).json({
            sucess:false,
            message:'something went wrong',
        });
    }
}

module.exports={
    createJob,
    getJob,
    editJob,
    deleteJob,
}