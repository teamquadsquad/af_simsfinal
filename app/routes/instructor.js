var express = require('express');
var router = express.Router();

var Instructor = require('../resource/instructor');

router.route('/')
    .post(Instructor.create)
    .get(Instructor.view);

router.route('/:id')
    .delete(Instructor.remove);

router.route('/approve')
    .post(Instructor.approve);

router.route('/dropDown')
    .get(Instructor.all);

router.route('/delDrop')
    .get(Instructor.delDrop);

module.exports = router;