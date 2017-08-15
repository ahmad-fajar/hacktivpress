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
// by author
// router.get('/author/:id', articleCtrl.viewByAuthor)
router.get('/author:q', articleCtrl.viewByAuthor)

// update
router.put('/:id', articleCtrl.articleUpdate);

// delete
router.delete('/:id', articleCtrl.articleDelete);


module.exports = router;