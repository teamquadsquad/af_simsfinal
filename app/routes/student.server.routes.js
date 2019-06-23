const _ = require('lodash');
const bcrypt = require('bcrypt');
const {Student, validate} = require('../models/student');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

router.post('/', async (req,res) => {

    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let student = await Student.findOne({username: req.body.username});
    if (student) return res.status(400).send('Student already registered!');

    student = new Student( _.pick(req.body, ['firstname', 'lastname', 'faculty', 'username', 'password']));

    const salt = await bcrypt.genSalt(10);
    student.password = await bcrypt.hash( student.password, salt);

    await student.save();

    res.send( _.pick( student, ['_id', 'firstname', 'lastname', 'faculty', 'username'] ) );
});

router.get('/', function(req,res){
    room.find().then(
        data => {
            return res.status(200).json(data);
        }
    ).catch(
        err => {
            return res.status(400).json(err);
        }
    )
});

module.exports = router;