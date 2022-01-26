const router = require('express').Router()
const { Thought, Reaction, User } = require('../models')

// post one reaction
router.post('/reactions', async function (req, res) {
  const reaction = await Reaction.create({ ...req.body, user: req.user._id, thought: req.body.thoughtid })
  await Thought.findByIdAndUpdate(req.body.thoughtid, { $push: { reactions: reaction._id } })
  await User.findByIdAndUpdate(req.user._id, { $push: { reactions: reaction._id } })
  res.json(reaction)
})

// get all reactions
router.get('/reactions', async function (req, res) {
  const reactions = await Reaction.find({}).populate('user')
  res.json(reactions)
})

// edit one reaction
router.put('/reactions/:id', async function (req, res) {
  const reaction = await Reaction.findByIdAndUpdate(req.params.id, { $set: req.body })
  res.json(reaction)
})

// delete one reaction
router.delete('/reactions/:id', (req, res) => {
  Reaction.findByIdAndDelete(req.params.id)
    .then(reply =>
      res.json(reply)
    )
})

module.exports = router