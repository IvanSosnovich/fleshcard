const express = require('express');
const morgan = require('morgan');
const path = require('path')
const app = express();
// const {connect} = require('./db/model')
const mainRouter = require('./router/mainRouter')
const PORT = 3010;

app.set('view engine', 'hbs');
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.env.PWD, 'public')));

app.use('/', mainRouter)

app.listen(PORT, () => {
  console.log('Server start');
});
