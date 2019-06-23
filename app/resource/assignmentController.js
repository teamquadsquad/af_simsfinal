const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Assignment = require('../models/assignmentSchema');

exports.createAssignment = (req, res, next) => {

    const assignment = new Assignment({
        _id: new mongoose.Types.ObjectId(),
        assignmentName: req.body.assignmentName,
        moduleName: req.body.moduleName,
        toBeSubmittedBy: req.body.toBeSubmittedBy,
        isOverdue: req.body.isOverdue,

        file: req.file.path
    });

    assignment
        .save()
        .then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Assignment created successfully'
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};

exports.getAllAssignments = (req, res, next) => {
    Assignment.find()
        .select('assignmentName moduleName toBeSubmittedBy isOverdue file')// select only these fields
        .exec()
        .then(docs => {
            //console.log(docs);
            const response = {
                count: docs.length,
                products: docs.map(doc => {
                    return {
                        assignmentName: doc.assignmentName,
                        moduleName: doc.moduleName,
                        toBeSubmittedBy: doc.toBeSubmittedBy,
                        isOverdue: doc.isOverdue,
                        file: doc.file
                    }
                })
            };
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
};
