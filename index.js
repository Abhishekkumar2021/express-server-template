//loading environment variables into process.env
require("dotenv").config();

//for cross origin resource sharing
const cors = require('cors')

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require('body-parser')

//express app
const app = express();

//middlewares
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 3001

//connect to database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    //listen for requests only after we have connected to database
    app.listen(port, () => {
      console.log("Connected to db & Server is running on PORT " + port);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

//routes
app.get('/', (req, res) => {
  console.log("Server got a request!")
  res.send("Hi, there")
})


