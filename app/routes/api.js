var express = require('express');
var router = express.Router();

const admin = require('./admin');
const instructor = require('./instructor');
const course = require('./course');
const login = require('./login');
const student = require('./student.server.routes');
const assignment = require('./assignmentRoutes');

router.use('/admin', admin);
router.use('/instructor', instructor);
router.use('/course', course);
router.use('/login', login);
router.use('/students', student);
router.use('/assignments', assignment);

module.exports = router;
