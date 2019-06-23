var express = require('express');
var router = express.Router();

var Course = require('../resource/course');

router.route('/')
    .post(Course.create)
    .get(Course.view);

router.route('/:id')
    .delete(Course.remove);

router.route('/assign')
    .post(Course.assign);

router.route('/dropDown')
    .get(Course.all);

router.route('/delDrop')
    .get(Course.delDrop);

module.exports = router;