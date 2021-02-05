const { connect, model, Schema, pluralize } = require('mongoose');

pluralize(null);

const userSchema = new Schema({
  name: String,
  login: String,
  password: String,
  // score: Number,
})

// const themeSchema = new Schema({
//   theme: String,
//   questions: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'question'
//   }]
// })

const questionSchema = new Schema({
  question: String,
  // price: Number,
  answer1: String,
  answer2: String,
  answer3: String,
  answer4: String,
  rightAnswer: String,
})


module.exports = {
  connect,
  User: model('users', userSchema),
  Question: model('question', questionSchema),
}
