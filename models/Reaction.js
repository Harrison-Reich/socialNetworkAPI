// creating Reaction model

const { Schema, model } = require('mongoose')

// contains text body, user and Id, thought ad timestamps
const Reaction = new Schema({
    body: {
      type: String,
      required: true,
      maxlength: 200
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: true
    },
    thought: {
      type: Schema.Types.ObjectId,
      ref: 'thought',
      required: true
    }
  }, { timestamps: true })

// exporting model
module.exports = model('reaction', Reaction)