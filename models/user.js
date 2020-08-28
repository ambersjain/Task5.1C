const mongoose = require("mongoose");
const validator = require('validator');
// User schema

//Defining the schema
const userSchema = mongoose.Schema({
    country: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    first_name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    last_name: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 255,
        unique: true,
        trim:true,
        lowercase:true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is not valid');
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    address: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 1000
    },
    city: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 50
    },
    state: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 1000
    },
    zip: {
        type: String,
        required: false,
    },
    mobile_number: {
        type: String,
        required: false,
        validate(value) {
            if (!validator.isMobilePhone(value) && value != '') {
                throw new Error('Mobile number is not valid');
            }
        }
    },
  }
)

//Defining a model
const User = mongoose.model('User', userSchema)
exports.User = User;