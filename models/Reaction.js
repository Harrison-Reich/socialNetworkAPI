const { Schema, model } = require('mongoose')

const Reaction = new Schema(
  {
    body: {
      type: String,
      required: true,
      maxlength: 300
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user'
      required: true
    },
    thought: {
      type: Schema.Types.ObjectId,
      ref: 'thought',
      required: true
    }
  }
)