const express = require('express');
const morgan = require('morgan');
const {connect} = require('./db/model')
const mongoose = require('mongoose');
const indexRouter = require("./routes/index");
const path = require('path');
const app = express();

const PORT = 3000;

app.set('views engine', 'hbs');
app.set(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(process.env.PWD, 'public')));



app.listen(PORT)


  app.use ("/", indexRouter);
