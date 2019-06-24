const _ = require('lodash');
const bcrypt = require('bcrypt');
const Student = require('../models/student');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

router.post('/', async (req,res) => {

    let student = await Student.findOne({email: req.body.email});
    if (student) return res.status(400).send('Student already registered!');

    student = new Student( _.pick(req.body, ['firstname', 'lastname', 'faculty', 'email', 'password']));

    const salt = await bcrypt.genSalt(10);
    student.password = await bcrypt.hash( student.password, salt);

    await student.save();

    res.send( _.pick( student, ['_id', 'firstname', 'lastname', 'faculty', 'email'] ) );
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