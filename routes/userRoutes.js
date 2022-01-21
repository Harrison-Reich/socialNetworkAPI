const router = require('express').Router()
const { User, Thought } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

// make a new user
router.post('/users/register', (req, res) => {
  const { username, email } = req.body
  User.register(new User({ username, email }), req.body.password, err => {
    if (err) { console.log(err) }
    res.sendStatus(200)
  })
})

// delete a user
router.delete('/users/:id', async function (req, res) {
  const user = await User.findByIdAndDelete(req.params.id)
  res.sendStatus(200)
})

module.exports = router