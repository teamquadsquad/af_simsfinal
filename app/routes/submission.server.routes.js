const Submission = require('../models/submissions');
const express = require('express');
const router = express.Router();

router.post('/', function(req,res){

    const Obj = new Submission(req.body);

    Obj.save().then(
        data => {
            return res.status(200).json(data);
        }
    ).catch(
        err => {
            return res.status(400).json(err);
        }
    )
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