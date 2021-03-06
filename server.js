const express = require('express')
const { join } = require('path')
const { User } = require('./models')

const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./routes'))

require('./db')
  .then(console.log(`---Connecting to Database---
    --Seeding Table Data--
    --Table Data Seeded--
  `))
  .then(() => app.listen(3000, () => { console.log(`App Listening on Port 300`)}))
  .catch(err => console.log(err))