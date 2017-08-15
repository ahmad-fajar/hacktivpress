'use strict'

const router = require('express').Router();
const userCtrl = require('../controllers/user');

// create new user (signup)
router.post('/', userCtrl.createUser);

// view all user
router.get('/', userCtrl.viewAll);


module.exports = router;