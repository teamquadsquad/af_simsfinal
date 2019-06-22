const Joi = require('joi');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    firstname: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
    },

    lastname: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
    },

    faculty: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50,
    },

    username: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    },

    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
    },

});

function validateStudent( student ){
    const schema = {
        firstname: Joi.string().min(5).max(50).required(),
        lastname: Joi.string().min(5).max(50).required(),
        faculty: Joi.string().min(2).max(50).required(),
        username: Joi.string().min(5).max(255).required(),
        password: Joi.string().min(5).max(255).required(),
    }
}

module.exports = mongoose.model('Student', studentSchema);