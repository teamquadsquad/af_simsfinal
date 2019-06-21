const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const category = require('./category');

const roomSchema = new Schema({
    code: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    wing : {
        type: String,
        required: true
    },
    pax: {
        type: String,
        required: true
    },
    categories: [
        {
            type: Schema.Types.ObjectId,
            ref: 'category'
        }
    ]
});

module.exports = mongoose.model('room', roomSchema);