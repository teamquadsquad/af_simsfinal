var pwd = require('../controllers/password');
var jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
var config = require('../constant/config');
var statusCode = require('../constant/status_codes');
var respones = require('../constant/responses');

var Admin = require('../models/admin');
var Student = require('../models/student');
var Instructor = require('../models/instructor');

/**
 * Login for all 3 type of users
 * normal user login
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function login(req, res, next) {

    try {

        console.log('inside login');
        Admin.findOne({ 'email': req.body.Email }).exec(function (err, admin) {

            if (err) {

                res.json(respones.failure(statusCode.SERVICE_UNAVAILABLE, "Server error. Please try again in a bit.", "server_error", "#UL001"));
            } else {

                if (admin !== null) {
                    console.log(pwd.decrypt(admin.password));
                    if (pwd.decrypt(admin.password) === req.body.Password) {

                        const payload = {
                            id: admin._id,
                            type: "Admin"
                        };
                        //token is a encrypted code. encrypted by secret.send this as a response when logged.
                        var coursewebToken = jwt.sign(payload, config.secret, {
                        });
                        //read this in the frontend and show the things only related to admin
                        res.json(respones.success(statusCode.OK, 'success', 'Login successfully', {

                            id: admin.id,
                            token: coursewebToken,
                            email: admin.email,
                            name: admin.name,
                            type: "Admin",

                        }));
                    } else {

                        res.json(respones.failure(statusCode.NON_AUTHORITATIVE_INFORMATION, 'Looks like your password is incorrect!', 'wrong_password', "#UL003"));
                    }
                } else {

                    Instructor.findOne({ 'email': req.body.Email }).exec(function (err, instructor) {

                        if (err) {

                            res.json(respones.failure(statusCode.SERVICE_UNAVAILABLE, "Server error. Please try again in a bit.", "server_error", "#UL001"));
                        } else {

                            if (instructor !== null) {

                                if (pwd.decrypt(instructor.password) === req.body.Password) {

                                    const payload = {
                                        id: instructor._id,
                                        type: "Instructor"
                                    };
                                    //token is a encrypted code. encrypted by secret.send this as a response when logged.
                                    var coursewebToken = jwt.sign(payload, config.secret, {
                                    });
                                    //read this in the frontend and show the things only related to admin
                                    res.json(respones.success(statusCode.OK, 'success', 'Login successfully', {

                                        id: instructor.id,
                                        token: coursewebToken,
                                        name: instructor.name,
                                        type: "Instructor",

                                    }));
                                } else {

                                    res.json(respones.failure(statusCode.NON_AUTHORITATIVE_INFORMATION, 'Looks like your password is incorrect!', 'wrong_password', "#UL003"));
                                }
                            } else {

                                Student.findOne({ 'email': req.body.Email }).exec(function (err, student) {

                                    if (err) {

                                        res.json(respones.failure(statusCode.SERVICE_UNAVAILABLE, "Server error. Please try again in a bit.", "server_error", "#UL001"));
                                    } else {

                                        if (student !== null) {

                                            // if (student.password === req.body.Password) {
                                            //
                                            //     const payload = {
                                            //         id: student._id,
                                            //         type: "Student"
                                            //     };
                                            //     //token is a encrypted code. encrypted by secret.send this as a response when logged.
                                            //     var coursewebToken = jwt.sign(payload, config.secret, {
                                            //     });
                                            //     //read this in the frontend and show the things only related to admin
                                            //     res.json(respones.success(statusCode.OK, 'success', 'Login successfully', {
                                            //
                                            //         id: student.id,
                                            //         token: coursewebToken,
                                            //         name: student.name,
                                            //         type: "Student",
                                            //
                                            //     }));
                                            // }

                                            bcrypt.compare(req.body.Password, student.password, (err, result) => {
                                                if (err) {
                                                    return res.status(401).json({
                                                        message: 'Authentication failed'
                                                    });
                                                }
                                                if (result) {

                                                    const payload = {
                                                        id: student._id,
                                                        type: "Student"
                                                    };
                                                    //token is a encrypted code. encrypted by secret.send this as a response when logged.
                                                    var coursewebToken = jwt.sign(payload, config.secret, {
                                                    });
                                                    //read this in the frontend and show the things only related to admin
                                                    res.json(respones.success(statusCode.OK, 'success', 'Login successfully', {

                                                        id: student.id,
                                                        token: coursewebToken,
                                                        name: student.firstname,
                                                        type: "Student",

                                                    }));

                                                }

                                                else{
                                                    res.json(respones.failure(statusCode.NON_AUTHORITATIVE_INFORMATION, 'Looks like your password is incorrect!', 'wrong_password', "#UL003"));
                                                }
                                            });

                                        } else {

                                            res.json(respones.failure(statusCode.NOT_FOUND, 'Hey! Your email address is not valid.', 'invalid_email', "#UL004"));
                                        }
                                    }
                                });
                            }
                        }
                    });
                }
            }
        });
    } catch (error) {

        res.json(respones.failure(statusCode.METHOD_FAILURE, error, 'execution fail', "#UL005"));
    }
}


module.exports = {
    
    login,
};
