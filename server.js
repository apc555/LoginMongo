const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express(); 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

const Static = path.join(__dirname, "public/");
app.use(express.static(Static));

app.listen(5000, function() {
    console.log("Server running");
  });