var express = require('express');
var router = express.Router();

const admin = require('./admin');
const instructor = require('./instructor');
const course = require('./course');
const login = require('./login');
<<<<<<< HEAD
// const student = require('./student');
=======
const assignment = require('./assignmentRoutes');
>>>>>>> 8bb591241e742102e7eb493d515111812d81e633

router.use('/admin', admin);
router.use('/instructor', instructor);
router.use('/course', course);
router.use('/login', login);
<<<<<<< HEAD
// router.use('/student', student);
=======
router.use('/assignments', assignment);
>>>>>>> 8bb591241e742102e7eb493d515111812d81e633

module.exports = router;
