const express = require("express");
const morgan = require("morgan");
const { connect } = require("./db/model");
const mongoose = require("mongoose");
const path = require("path");
const app = express();

const mainRouter = require("./router/mainRouter");
const loginRouter = require('./router/loginRouter');
const questionsRouter = require('./router/questionRouter')

app.set("view engine", "hbs");
app.set(morgan("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());  
app.use(express.static(path.join(process.env.PWD, "public")));

const PORT = 3000;

app.listen(PORT, () => {
  console.log("Server start");
});

app.use("/", mainRouter);
app.use('/login',loginRouter)
app.use('/questions',questionsRouter)

