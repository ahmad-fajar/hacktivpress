'use strict'

const Article = require('../models/article');


// create
exports.createArticle = (req, res) => {
  let data = {
    title : req.body.title,
    content : req.body.content,
    category : req.body.category,
    author : req.body.author
  }
  Article.create(data)
  .then(article => {
    res.send(article)
  })
  .catch(e => {
    res.status(500).send(e)
  })
}


// read
// view all
exports.viewAll = (req, res) => {
  Article.find()
  .populate('author', 'username')
  .exec()
  .then(articles => {
    res.send(articles)
  })
  .catch(e => {
    res.status(500).send(e)
  })
}

// view one
exports.viewOne = (req, res) => {
  Article.findById(req.params.id)
  .populate('author', 'username')
  .exec()
  .then(article => {
    res.send(article)
  })
  .catch(e => {
    res.status(500).send(e)
  })
}


// update
exports.articleUpdate = (req, res) => {
  Article.findById(req.params.id)
  .then(data => {
    let updater = {
      title : req.body.title  || data.title,
      content : req.body.content || data.content,
      category : req.body.category || data.category
    }
    Article.findByIdAndUpdate(req.params.id, updater)
    .then(updated => {
      res.send(updated)
    })
    .catch(e => {
      res.send(e)
    })
  })
  .catch(e => {
    res.status(500).send(e)
  })
}