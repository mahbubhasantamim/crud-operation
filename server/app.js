//EXTERNAL IMPORT
const express = require("express");
const app = express();
const cors = require("cors");

//INTERNAL IMPORT
require("./config/db");
const productRouter = require("./routes/products.route");

app.use(cors());

//handle form data
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//set static folder
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.send("Home route");
});

//routes
app.use(productRouter);

module.exports = app;
