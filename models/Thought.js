Const { Schema, model } = require('mongoose')

const Thought = new Schema(
  {
    body: {
      type: String,
      required: 'Are you there? You need to leave a post before you can leave!'
      minlength: 1,
      maxlength: 300
    },
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user'
      required: true
    },
    reactions: [{
      type: Schema.Types.ObjectId,
      ref: 'reaction'
    }]
  }, { timestamps: true }
)

module.exports = model('thought', Thought)