const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    name : {type : String, min : 3, required : true},
    username : {type : String, required : true},
    email : {type : String, required : true, unique : true},
    password : {type : String, required : true},
    mobile : {type : Number, digit : 10, required : true },
    country : {type : String, required : true },
    gender : { type : String, enum : ['male', 'female'], required : true }
})

const userModel = model('users', userSchema)
module.exports = userModel;


// {
//     "name" : "Sarvjyoti",
//     "username" : "Rana Sarvjyoti",
//     "email" : "jyoti@123",
//     "password" : "123456",
//     "mobile" : 1234567890,
//     "country" : "India",
//     "gender" : "female"
//   }