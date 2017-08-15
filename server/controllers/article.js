'use strict'

const Article = require('../models/article');


// create
// exports.createArticle = (req, res) => {
//   let data = {
//     title : req.body.title,
//     content : req.body.content,
//     category : req.body.category,
//
//   }
// }


// read
// view all
exports.viewAll = (req, res) => {
  Article.find()
  .then(articles => {
    res.send(articles)
  })
  .catch(e => {
    res.status(500).send(e)
  })
}