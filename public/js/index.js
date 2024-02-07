console.log('hola')

envio.addEventListener ("click", (e) =>
{
    e.preventDefault();

    let datos = new FormData(loginForm);

    for(let [name, value] of datos) {
        console.log(`${name} = ${value}`);
    }

    
})