var express = require('express');
var router = express.Router();


const admin = require('./admin');
const instructor = require('./instructor');
const course = require('./course');
const assignment = require('./assignmentRoutes');

router.use('/admin', admin);
router.use('/instructor', instructor);
router.use('/course', course);
router.use('/assignments',assignment);

module.exports = router;
