const mongoose = require("mongoose")
exports.connect = ()=>{
    mongoose.connect('mongodb://localhost:27017/yelp-camp',{})
    .then(()=>{
        console.log("Connected to DB")
    })
    .catch((error)=>{
        console.log("Error while connecting to DB");
    })
}