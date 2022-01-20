const { Schema, model } = require('mongoose')

const Reaction = new Schema(
  {
    body: {
      type: String,
      required: true,
      maxlength: 300
    },
  }
)