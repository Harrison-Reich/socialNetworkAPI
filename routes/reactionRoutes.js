const router = require('express').Router()
const { Thought, Reaction, User } = require('../models')
const passport = require('passport')

// post one reaction
router.post('/reactions', passport.authenticate('jwt'), async function (req, res) {
  const reaction = await Reaction.create({ ...req.body, user: req.user._id, thought: req.body.thoughtid })
  await Thought.findByIdAndUpdate(req.body.thoughtid, { $push: { reactions: reaction._id } })
  await User.findByIdAndUpdate(req.user._id, { $push: { reactions: reaction._id } })
  res.json(reaction)
})

// get all reactions
router.get('/reactions', passport.authenticate('jwt'), async function (req, res) {
  const reactions = await Reaction.find({}).populate('user')
  res.json(reactions)
})