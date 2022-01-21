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

// add a friend
router.post('/user/:userId/friend/:friendId', passport.authenticate('jwt'), async function (req, res) {
  const friend = await User.findByIdAndUpdate(req.params.userId, { $addToSet: { friends: req.params.friendId } })
  const friend2 = await User.findByIdAndUpdate(req.params.friendId, { $addToSet: { friends: req.params.userId } })
  res.sendStatus(200)
})

module.exports = router