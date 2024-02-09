const express = require("express");
const path = require("path");
const cors = require("cors");
const fileupload = require("express-fileupload")
const app = express();
const {accionLogin} = require("./midelwares/login.js")
// para headers: application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: true }));
// para datos en JSON en body
app.use(express.json());
app.use(cors())
app.use(fileupload())
// Accedo o arquivo estático
const carpetaStatica = path.join(__dirname, "static")
app.use(express.static(carpetaStatica));

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

app.listen(3000)