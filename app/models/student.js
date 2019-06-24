const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StudentSchema = Schema({

    firstname: {
        type: String,
        required: true
    },

    lastname: {
        type: String,
        required: true
    },

    faculty: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Student', StudentSchema);