const mongoose =require("mongoose");


mongoose.connect("mongodb://127.0.0.1:27017/Student",{
    useNewurlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("connction established")
}).catch((e)=>{
    console.log("connction not established",e)
})
