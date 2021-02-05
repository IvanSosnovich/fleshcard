const express = require('express')
const app = require('../server')
const router = express.Router()
const User = require('../db/model')

router.get('/', (req, res) => {
  res.render('login')
})

router.post('/',async  (req, res) => {
  const user = new User({name:req.body.name, login:req.body.login, password:req.body.password})
  // await user.save();
  console.log(req.body)
  res.redirect('index')
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


 