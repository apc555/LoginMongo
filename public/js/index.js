console.log('hola')

const formLogin = document.getElementById("loginForm")



envio.addEventListener ("click", (e) =>
{
    e.preventDefault();

    const usuario = formLogin.usuario.value;
    const password = formLogin.password.value;

    let datos = new FormData(loginForm);

    for(let [name, value] of datos) {
        console.log(`${name} = ${value}`);
    }  

    if (usuario === "user" && password === "1234") {
        alert("Haz hecho login")
    
    }

    else {
        alert("Error de inicio")
    }
})

