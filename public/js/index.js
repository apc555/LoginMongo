console.log('hola')

const formLogin = document.getElementById("loginForm")



envio.addEventListener ("click",async (e) =>
{
    e.preventDefault();

    let recibido = await fetch('/logueo',{method:'POST', body: new FormData(loginForm)})
  
})

