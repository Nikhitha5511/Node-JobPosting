const express=require('express');

const jobController = require('../controllers/jobapp')

const router=express.Router();

router.post("",jobController.createJob);

router.get("",jobController.getJob);

router.patch("",jobController.editJob);

router.delete("",jobController.deleteJob);

module.exports=router;
// mongodb+srv://Nikhitha:vijaya5566@V@cluster0.k5t1n1b.mongodb.net/
