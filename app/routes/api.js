var express = require('express');
var router = express.Router();


const admin = require('./admin');
const instructor = require('./instructor');
const course = require('./course');
const login = require('./login');
// const student = require('./student');

router.use('/admin', admin);
router.use('/instructor', instructor);
router.use('/course', course);
router.use('/login', login);
// router.use('/student', student);

module.exports = router;
