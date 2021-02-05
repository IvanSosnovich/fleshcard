const express = require('express')
const app = require('../server')
const router = express.Router()
const User = require('../models/User')


router.get('/', (req, res) => {
  res.render('login')
})

router.post('/', (req, res) => {
  const { login, password } = req.body
  const user = User.create({
    username: login,
    password
  })
})
 
module.exports = router


 