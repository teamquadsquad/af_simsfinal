var express = require('express');
var router = express.Router();

var Instructor = require('../resource/instructor');

router.route('/')
    .post(Instructor.create)
    .get(Instructor.all);

router.route('/approve')
    .post(Instructor.approve);

module.exports = router;