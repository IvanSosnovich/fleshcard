const express = require('express');
const morgan = require('morgan');
const {connect} = require('./db/model')
const app = express();

const PORT = 3000;

app.set('views engine', 'hbs');
app.set(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.env.PWD, 'public')));

app.listen(PORT, () => {
  console.log('Server start');
  connect(
    'mongodb://localhost:27017/fleashCard',
    {Î
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    () => {
      console.log('base start');
    },
  );
});
