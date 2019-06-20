const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SubmissionSchema = Schema({

    assignmentName: {
        type: String
    },
    courseName: {
        type: String
    },
    studentEmail:{
        type: String
    },
    submittedDate: {
        type: Date
    },
    file: {
        type: String
    }
});

module.exports = mongoose.model('Submission', SubmissionSchema);