var jwt = require('jsonwebtoken');
var config = require('../constant/config');
var statusCode = require('../constant/status_codes');
var respones = require('../constant/responses');

var Course = require('../models/course');

/**
 * normal user register
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function create(req, res, next) {

    try {

        var coursewebToken = req.headers['courseweb-access-token'];
        jwt.verify(coursewebToken, config.secret, async function (err, decoded) {

            console.log(decoded);
            if (err) {

                res.json(respones.failure(statusCode.NON_AUTHORITATIVE_INFORMATION, err, 'token fail', "#US001"));
            } else if (decoded.type == "Admin") {
                var course = new Course();

                course.name = req.body.Name;
                course.description = req.body.Description;

                Course.findOne({ 'name': req.body.Name }).exec(function (err, courses) {

                    if (err) {

                        res.json(respones.failure(statusCode.METHeOD_FAILURE, err, 'server_error', "#UNR000"));
                    } else {

                        if (courses !== null) {

                            res.json(respones.failure(statusCode.METHOD_FAILURE, "Looks like you’ve already registered that course.", 'user_already_exist', "#UNR001"));
                        } else {

                            course.save(function (err) {

                                if (err) {

                                    console.log(err);
                                    res.json(respones.failure(statusCode.METHOD_FAILURE, err, "server_error", "#UNR002"));
                                } else {

                                    res.json(respones.success(statusCode.OK, 'success', 'Created Successfully', {

                                        name: course.name,
                                        description: course.description,
                                        instructor: course.instructor,
                                        _id: course._id
                                    }));
                                }
                            });
                        }
                    }
                });
            }
        });
    } catch (error) {

        console.log(error);
        res.json(respones.failure(statusCode.METHOD_FAILURE, error, 'execution fail', "#UNR004"));
    }
}

/**
 * POST
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function assign(req, res, next) {

    try {

        var coursewebToken = req.headers['courseweb-access-token'];
        jwt.verify(coursewebToken, config.secret, async function (err, decoded) {

            console.log(decoded);
            if (err) {

                res.json(respones.failure(statusCode.NON_AUTHORITATIVE_INFORMATION, err, 'token fail', "#US001"));
            } else if (decoded.type == "Admin") {

                var query = { '_id': Object(req.body.Id) };
                var newValues = {

                    instructor: req.body.Instructor,
                    isEnable: true
                };

                Course.findOneAndUpdate(query, newValues, function (err, course) {

                    if (err) {

                        res.json(respones.failure(statusCode.NOT_MODIFIED, err, 'failed', "#PFU001"));
                    } else {

                        res.json(respones.success(statusCode.OK, 'success', "changed modifires Successfully.", course));
                    }
                });
            }
        });
    } catch (error) {

        console.log(error);
        res.json(respones.failure(statusCode.METHOD_FAILURE, error, 'execution fail', "#UNR004"));
    }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function all(req, res, next) {

    try {

        var coursewebToken = req.headers['courseweb-access-token'];
        jwt.verify(coursewebToken, config.secret, async function (err, decoded) {

            console.log(decoded);
            if (err) {

                res.json(respones.failure(statusCode.NON_AUTHORITATIVE_INFORMATION, err, 'token fail', "#US001"));
            } else if (decoded.type == "Admin") {

                Course.find({ 'isEnable': false }).exec(function (err, courses) {

                    if (err) {

                        res.json(respones.failure(statusCode.NOT_MODIFIED, err, 'failed', "#PFU001"));
                    } else {

                        var finalArray = [];
                        for (let index = 0; index < courses.length; index++) {

                            finalArray.push({ label: courses[index].name, value: courses[index]._id });

                        }
                        res.json(respones.success(statusCode.OK, 'success', "all courses", finalArray));
                    }
                });
            } else {

                res.json(respones.failure(statusCode.METHOD_FAILURE, 'unauthorize user', 'execution fail', "#UNR004"));
            }
        });
    } catch (error) {

        console.log(error);
        res.json(respones.failure(statusCode.METHOD_FAILURE, error, 'execution fail', "#UNR004"));
    }
}

/**
 * GET
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function view(req, res, next) {

    try {

        var coursewebToken = req.headers['courseweb-access-token'];
        jwt.verify(coursewebToken, config.secret, async function (err, decoded) {

            console.log(decoded);
            if (err) {

                res.json(respones.failure(statusCode.NON_AUTHORITATIVE_INFORMATION, err, 'token fail', "#US001"));
            } else if (decoded.type == "Admin") {

                Course.find().exec(function (err, courses) {

                    if (err) {

                        res.json(respones.failure(statusCode.NOT_MODIFIED, err, 'failed', "#PFU001"));
                    } else {


                        res.json(respones.success(statusCode.OK, 'success', "all courses", courses));
                    }
                });
            } else {

                res.json(respones.failure(statusCode.METHOD_FAILURE, 'unauthorize user', 'execution fail', "#UNR004"));
            }
        });
    } catch (error) {

        console.log(error);
        res.json(respones.failure(statusCode.METHOD_FAILURE, error, 'execution fail', "#UNR004"));
    }
}

/**
 * DELETE
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function remove(req, res, next) {

    try {

        var coursewebToken = req.headers['courseweb-access-token'];
        jwt.verify(coursewebToken, config.secret, async function (err, decoded) {

            console.log(decoded);
            if (err) {

                res.json(respones.failure(statusCode.NON_AUTHORITATIVE_INFORMATION, err, 'token fail', "#US001"));
            } else if (decoded.type == "Admin") {

                Course.deleteOne({ '_id': Object(req.params.id) }).exec(function (err, coursesResult) {

                    if (err) {

                        res.json(respones.failure(statusCode.NOT_MODIFIED, err, 'failed', "#PFU001"));
                    } else {


                        res.json(respones.success(statusCode.OK, 'success', "course removed", coursesResult));
                    }
                });
            } else {

                res.json(respones.failure(statusCode.METHOD_FAILURE, 'unauthorize user', 'execution fail', "#UNR004"));
            }
        });
    } catch (error) {

        console.log(error);
        res.json(respones.failure(statusCode.METHOD_FAILURE, error, 'execution fail', "#UNR004"));
    }
}

/**
 * GET
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
function delDrop(req, res, next) {

    try {

        var coursewebToken = req.headers['courseweb-access-token'];
        jwt.verify(coursewebToken, config.secret, async function (err, decoded) {

            console.log(decoded);
            if (err) {

                res.json(respones.failure(statusCode.NON_AUTHORITATIVE_INFORMATION, err, 'token fail', "#US001"));
            } else if (decoded.type == "Admin") {

                Course.find().exec(function (err, courses) {

                    if (err) {

                        res.json(respones.failure(statusCode.NOT_MODIFIED, err, 'failed', "#PFU001"));
                    } else {

                        var finalArray = [];
                        for (let index = 0; index < courses.length; index++) {

                            finalArray.push({ label: courses[index].name, value: courses[index]._id });

                        }
                        res.json(respones.success(statusCode.OK, 'success', "all courses", finalArray));
                    }
                });
            } else {

                res.json(respones.failure(statusCode.METHOD_FAILURE, 'unauthorize user', 'execution fail', "#UNR004"));
            }
        });
    } catch (error) {

        console.log(error);
        res.json(respones.failure(statusCode.METHOD_FAILURE, error, 'execution fail', "#UNR004"));
    }
}
module.exports = {
    create,
    assign,
    all,
    view,
    remove,
    delDrop
};

