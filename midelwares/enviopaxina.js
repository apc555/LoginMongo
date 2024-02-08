const path = require("path");
const carpetaStatica = path.join(__dirname, "../static")
const enviopaxina = (req, res) => {
    let email    = req.body.email;
    let password = req.body.password;
    
    if(email == "israel@pepito.com" && password == '12345'){
      res.sendFile("outra.html",{root:carpetaStatica})
    }else{
      res.send(`Email: ${email}, Password: ${password}`);
    }
  }

  module.exports = {
    enviopaxina
  }