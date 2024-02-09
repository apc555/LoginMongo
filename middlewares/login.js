const path = require("path");
const rutaStatic = path.join(__dirname, "../static")
const accionLogin = (req, res) => {
    let email    = req.body.email;
    let password = req.body.password;
    console.log(email,password)
    if(email == "admin@exemplo.com" && password == 'admin'){
      res.sendFile("admin.html",{root:rutaStatic})
    }
    else if(email == "parque@libre.com" && password == 'parque'){
      res.sendFile("usuario.html",{root:rutaStatic})
    }
    else{
      //res.send(`Email: ${email}, Password: ${password}`);
      res.sendFile("error.html",{root:rutaStatic})
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
    accionLogin
  }