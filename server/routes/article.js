'use strict'

const router = require('express').Router();
const articleCtrl = require('../controllers/article');


// create article
router.post('/', articleCtrl.createArticle);

// view
// all
router.get('/', articleCtrl.viewAll);
// by id
router.get('/:id', articleCtrl.viewOne);

// update
router.put('/:id', articleCtrl.articleUpdate);


module.exports = router;