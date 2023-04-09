const express = require('express');
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./routes/User");
require('dotenv').config();

const mongourl = process.env.MONGO_URL;

mongoose.connect(mongourl,{}).then(()=>{
    console.log("connected mongourl successfully");
}).catch((err)=>{console.log(err)})

app.use(express.json());
app.use(cors());
app.use(User);

app.get('/',(req,res)=>{
    res.send("welcome to our hotel...");
}); 
const port = 7000;
app.listen(port,()=>{
    console.log("listening on port: "+port);
})