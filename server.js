require('dotenv').config()
const { MongoClient } = require("mongodb");
const uri = process.env.URIMONGO; // Replace with your MongoDB connection string
const bbdd = process.env.BBDD; // Replace with your MongoDB database name
const coleccion = process.env.COLECCION;
// abrimos la conexion con mongo
const cliente = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });


const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();
const fileupload = require("express-fileupload");

const {accionLogin} = require("./middlewares/login.js");
// para headers: application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: true }));
// para datos en JSON en body
app.use(express.json());
app.use(cors())
app.use(fileupload())
// Accedo o arquivo estático
const rutaStatic = path.join(__dirname, "static")
app.use(express.static(rutaStatic));

app.post("/logueo",(req,res)=>{
    console.log('name e nome: ',req.body.nome)
    console.log('corpo: ',req.body)
    /* for (const property in req.body) {
        console.log(`Propiedade: ${property}: ${req.body[property]}`);
      } */
})

app.post("/texto",(req,res)=>{
    console.log('corpo: ',req.body)
})

// Esta petición necesita responder
//Podes observar o que fai o navegador se comentas a línea 34
app.post('/login', accionLogin); // revisa inputs e envia unha paxina

app.listen(3000, function(){
    console.log("Servidor encendido . . .")
})