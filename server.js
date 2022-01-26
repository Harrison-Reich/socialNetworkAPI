const express = require('express')
const { join } = require('path')
const { User } = require('./models')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(passport.initialize())
app.use(passport.session())

app.use(require('./routes'))

require('./db')
  .then(() => app.listen(3000))
  .catch(err => console.log(err))