'use strict'

const router = require('express').Router();
const articleCtrl = require('../controllers/article');


// view all
router.get('/', articleCtrl.viewAll);


module.exports = router;