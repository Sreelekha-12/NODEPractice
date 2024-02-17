const express=require("express");
const router = new express.Router(); //creating router
const StudentData = require("../models/structure");

//handle post request
router.post('/student',async (req,res)=>{
    try{
          const insertData= new StudentData(req.body);
          const insertDataRes = await insertData.save();
          res.status(201).send(insertDataRes);
  
    }catch(e){
      res.status(400).send(e);
  
    }
  
   })
  
   //handle get request
      router.get('/student',async (req,res)=>{
        try{
          const getData = await StudentData.find({})
          res.status(200).send(getData);
  
        }catch(err){
          res.send(400).send(err);
        }
      })
  
      //handle get request by id
      router.get('/student/:id',async (req,res)=>{
        try{
          const getData = await StudentData.findById(req.params.id)
          res.status(200).send(getData);
  
        }catch(err){
          res.send(400).send(err);
        }
      }) 
  
      //handle patch or put request
      router.patch('/student/:id',async (req,res)=>{
        try{
          const patchData = await StudentData.findByIdAndUpdate(req.params.id ,req.body,{
            new:true
          })
          const patchDataRes = await patchData.save();
          res.status(200).send(patchDataRes);
  
        }catch(err){
          res.send(500).send(err);
        }
      }) 
  
      //handle get request by id
      router.delete('/student/:id',async (req,res)=>{
        try{
          const deleteData = await StudentData.findByIdAndDelete(req.params.id)
          res.status(200).send(deleteData);
  
        }catch(err){
          res.send(400).send(err);
        }
      }) 
      module.exports=router;