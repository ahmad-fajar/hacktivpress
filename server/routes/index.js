'use strict'

const router = require('express').Router();

// index
router.get('/', (req, res) => res.send('Index page'));


module.exports = router;