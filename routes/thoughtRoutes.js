const router = require('express').Router()
const { Thought, User } = require('../models')
const { sendStatus } = require('express/lib/response')

// create a thought
router.post('/thoughts', async function (req, res) {
  const thought = await Thought.create({ ...req.body, user: req.user._id })
  await User.findByIdAndUpdate(req.user._id, { $push: { thoughts: thought._id } })
  res.json(thought)
})

// edit one thought
router.put('/thoughts/:id', async function (req, res) {
  const thought = await Thought.findByIdAndUpdate(req.params.id, { $set: req.body })
  res.json(thought)
})

// delete one thought
router.delete('/thought/:id', async function (req, res) {
  await Thought.findByIdAndDelete(req.params.id)
  res.sendStatus(200)
})

// find one thought
router.get('/thought/:id', async function (req, res) {
  const thought = await Thought.findById(req.params.id).populate('user').populate('reactions')
  res.json(thought)
})

// find all thoughts
router.get('/thoughts', async function (req, res) {
  const thoughts = await Thought.find({}).populate('user').populate('reactions')
  res.json(thoughts)
})

module.exports = router