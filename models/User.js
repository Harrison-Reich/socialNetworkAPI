// creating User model
const { Schema, model } = require('mongoose')

// contains username, email, thoughts, reactions, friends and timestamps
const User  = new Schema (
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    thoughts: [{
      type: Schema.Types.ObjectId,
      ref: 'thought'
    }],
    reactions: [{
      type: Schema.Types.ObjectId,
      ref: 'reaction'
    }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'user'
    }]
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }, { timestamps: true }
)

// function to get data about the friend count
User.virtual('friendCount').get(function() {
  return this.friends.length
})

// passport local require
User.plugin(require('passport-local-mongoose'))

// exporting model
module.exports = model('user', User)