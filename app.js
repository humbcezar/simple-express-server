require("dotenv").config();
const express = require("express");
var path = require("path");
var logger = require("morgan");
var mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

mongoose.connect(process.env.DB_HOST, {
	useNewUrlParser: true,
	dbName: process.env.DB_DATABASE
})
	.then(() => {
		console.log("DB successfully connected: " + process.env.DB_HOST + "/" + process.env.DB_DATABASE);
	})
	.catch((err) => {
		throw err;
	});

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
