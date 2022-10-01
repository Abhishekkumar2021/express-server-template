const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//An User Schema
const userSchema = new Schema({
    username:{
        type:String,
        required:[true,"Please provide a username"]
    },
    email:{
        type:String,
        required:[true,"Please provide an email"],
        unique:true,
        match:[ /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,"Please provide correct email address"]
    },
    password:{
        type:String,
        required:[true, "Please provide a password"],
        minLength:6,
        select:false
    },
},{timestamps:true});

module.exports = mongoose.model('user',userSchema);