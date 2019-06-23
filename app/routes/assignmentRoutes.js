var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');

const assignmentController = require('../resource/assignmentController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploadsInstructor/');
    },
    filename: function (req, file, cb) {
        cb(null, Math.random().toString() + file.originalname);
    }//  Date.now().toISOString()

});

const fileFilter = (req, file, cb) => {
    //reject a file
    if (file.mimetype === 'image/jpeg' ||
        file.mimetype === 'image/png' ||
        file.mimetype === 'application/pdf' ||
        file.mimetype === 'application/msword' ||
        file.mimetype === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
        file.mimetype === 'application/vnd.ms-powerpoint' ||
        file.mimetype === 'application/vnd.openxmlformats-officedocument.presentationml.presentation') {
        cb(null, true);
    } else {
        cb(null, false);
    }
};
// const upload = multer({dest: 'uploads/'});
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 10
    },
    fileFilter: fileFilter
});

router.post('/', upload.single('file'), assignmentController.createAssignment);

router.get('/', assignmentController.getAllAssignments);

module.exports = router;