const path = require("path");
const carpetaStatica = path.join(__dirname, "../static")
const enviopaxina = (req, res) => {
    let email    = req.body.email;
    let password = req.body.password;
    console.log(email,password)
    if(email == "israel@pepito.com" && password == '12345'){
      res.sendFile("outra.html",{root:carpetaStatica})
    }
    else if(email == "parque@libre.com" && password == '54321'){
      res.sendFile("outra2.html",{root:carpetaStatica})
    }
    else if(email == "paquito@yunque.com" && password == '12345'){
      res.sendFile("outra3.html",{root:carpetaStatica})
    }   
    else{
      res.send(`Email: ${email}, Password: ${password}`);
    }
  }

  /*   if (condition1)
          statement1
       else if (condition2)
          statement2
       else if (condition3)
          statement3
      // …
       else
          statementN */

  module.exports = {
    enviopaxina
  }