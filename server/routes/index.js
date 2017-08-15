'use strict'

const router = require('express').Router();
const userCtrl = require('../controllers/user');


// index
router.get('/', (req, res) => res.send('Index page'));

// signup
router.post('/signup', userCtrl.createUser);

module.exports = router;