const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();


// para headers: application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: true }));
// para datos en JSON en body
app.use(express.json());
app.use(cors())

// Accedo o arquivo estático
app.use(express.static(path.join(__dirname, "static")));

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
//Podes observar o que fai o navegador se comentas a línea 31
app.post('/login', (req, res) => {
    let email    = req.body.email;
    let password = req.body.password;
    console.log('loguin??? ',email,password)
    res.send(`Email: ${email}, Password: ${password}`);
  });

app.listen(3000)