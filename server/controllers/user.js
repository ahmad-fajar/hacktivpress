'use strict'

const User = require('../models/user');

// create new user
exports.createUser = (req, res) => {
  let data = {
    username : req.body.username,
    password : req.body.password
  }
  User.create(data)
  .then(user => {
    res.send(user)
  })
  .catch(e => {
    res.status(500).send(e)
  })
}