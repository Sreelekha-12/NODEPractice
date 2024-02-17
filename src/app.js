const express = require("express");
const app = express();
require("../src/db/connection")
const StudentData = require("../src/models/structure")
const port=process.env.PORT || 3000;
const router=require("../src/routers/routerscode")
app.use(express.json())
app.use(router)



app.listen(port,()=>{
    console.log(`connection is on port no: ${port}`);
})