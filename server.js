const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const User = require("./models/workoutModel");

const app = express();

//Middleware
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

//Mongoose Connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { 
  useNewUrlParser: true,
  useFindAndModify: false 
});

//Routes
app.use(require("./routes/api-routes"));

//Starting Port
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});