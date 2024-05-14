const mongoose = require("mongoose");
require("dotenv").config();
exports.connect = ()=>{
    mongoose.connect(process.env.MONGODB_URL,{})
    .then(()=>{
        console.log("Connected to DB")
    })
    .catch((error)=>{
        console.log("Error while connecting to DB");
    })
}