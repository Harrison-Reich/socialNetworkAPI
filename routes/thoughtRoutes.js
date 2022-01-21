const router = require('express').Router()
const { Thought, User } = require('../models')
const passport = require('passport')
const { sendStatus } = require('express/lib/response')

module.exports = router