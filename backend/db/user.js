// const mongoose=require("mongoose");
// const userSchema = new mongoose.Schema({
//     name:String,
//     email:String,
//     age:Number,
//     address:String,
//     password: String
// });

// const User=mongoose.model('users', userSchema);
// module.exports=User;

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    address: String,
    password: String,
    role: { type: String, enum: ['admin', 'user'], default: 'user' }  // Add role
});

const User = mongoose.model('users', userSchema);
module.exports = User;
