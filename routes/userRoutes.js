const router = require('express').Router()
const { User, Thought } = require('../models')
const passport = require('passport')
const jwt = require('jsonwebtoken')

module.exports = router