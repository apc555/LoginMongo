const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express(); 
const fileUpload = require("express-fileupload");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use(fileUpload());

const Static = path.join(__dirname, "public/");
app.use(express.static(Static));

app.post("/logueo",(req,res)=>{
    console.log("datos recibidos en req.body: ",req.body)
    console.log("datos recibidos en req.body.usuario: ",req.body.usuario)
    console.log("datos recibidos en req.body.password: ",req.body.password)
})
app.listen(5000, function() {
    console.log("Server running");
  });