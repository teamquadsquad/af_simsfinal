var express = require('express');
var router = express.Router();

var Admin = require('../resource/admin');

router.route('/')
    .post(Admin.create)
    .get(Admin.view);

router.route('/:id')
    .delete(Admin.remove);

router.route('/login')
    .post(Admin.login);

router.route('/delDrop')
    .get(Admin.delDrop);

module.exports = router;