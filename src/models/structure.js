const express = require('express');
const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
rollno:{
    type:String,
    required:true,
    unique:true
},
fullname:{
    type:String,
    required:true,
    trim:true
},
dob:{
    type:String,
    required:true
},
qualification:{
    type:String,
    required:true
},
mobileno:{
    type:Number,
    required:true,
    unique:true
},
email:{
    type:String,
    required:true,
    unique:true
},
collegename:{
    type:String,
    default:"JNTUA"
}
})
//creating new collection
const StudentData = new mongoose.model("StudentInfo",StudentSchema)
module.exports = StudentData;
