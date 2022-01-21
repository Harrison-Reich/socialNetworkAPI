const router = require('express').Router()
const { Thought, User } = require('../models')
const passport = require('passport')
const { sendStatus } = require('express/lib/response')

// create a thought
router.post('/thoughts', passport.authenticate('jwt'), async function (req, res) {
  const thought = await Thought.create({ ...req.body, user: req.user._id })
  await User.findByIdAndUpdate(req.user._id, { $push: { thoughts: thought._id } })
  res.json(thought)
})

// create a thought
router.post('/thoughts', passport.authenticate('jwt'), async function (req, res) {
  const thought = await Thought.create({ ...req.body, user: req.user._id })
  await User.findByIdAndUpdate(req.user._id, { $push: { thoughts: thought._id } })
  res.json(thought)
})

module.exports = router