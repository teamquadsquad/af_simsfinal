const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const room = require('./room');

const categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    rooms: [
        {
            type: Schema.Types.ObjectId,
            ref: 'room'
        }
    ]
});

module.exports = mongoose.model('category', categorySchema);