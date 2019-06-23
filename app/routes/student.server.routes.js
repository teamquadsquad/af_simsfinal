const {Student, validate} = require('../models/student');
const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

router.post('/', async (req,res) => {

    const {error} = validate(req.body);
    if(error) return res.status(400).send(error.details[0].message);

    let student = await Student.findOne({username: req.body.username});
    if (student) return res.status(400).send('Student already registered!');

    student = new Student({
        firstname : req.body.firstname,
        lastname : req.body.lastname,
        faculty : req.body.faculty,
        username : req.body.username,
        password : req.body.password
    });

    await student.save();

    res.send(student);
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