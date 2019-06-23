var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var AssignmentSchema = new Schema({

    assignmentName: {
        type: String
    },
    moduleName: {
        type: String
    },
    toBeSubmittedBy: {
        type: Date
    },
    isOverdue: {
        type: Boolean
    },
    file: {
        type: String
    }

});

module.exports = mongoose.model('Assignment', AssignmentSchema);
