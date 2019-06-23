var express = require('express');
var router = express.Router();

var Login = require('../resource/login');

router.route('/')
    .post(Login.login);

module.exports = router;