const express = require('express');
const router = express.Router();
const category = require('../models/category');

router.post('/add', function(req,res){

    const catObj = new category(req.body);

    catObj.save().then(
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
    category.find().then(
        data => {
            return res.status(200).json(data);
        }
    ).catch(
        err => {
            return res.status(400).json(err);
        }
    )
});

router.get('/find/:id', function(req,res){
    category.findById(req.params.id).then(
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