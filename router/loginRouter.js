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
// router.post('/', async (req, res) => {
//   const { login, email, password1 } = req.body;
//   const user = new User({ login, email, password: password1 });
//   const loginCheck = await User.findOne({ login });
//   const emailCheck = await User.findOne({ email });
//   if (emailCheck ?? loginCheck) {
//     res.status(400).send('такой email или login уже зарегистрирован');
//   } else {
//     req.session.user = user;
//     await user.save();
//   }
//   res.redirect('/');
// });

module.exports = router


 