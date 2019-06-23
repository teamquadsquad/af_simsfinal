var express = require('express');
var router = express.Router();

var Course = require('../resource/course');

router.route('/')
    .post(Course.create)
    .get(Course.all);

router.route('/assign')
    .post(Course.assign);

module.exports = router;