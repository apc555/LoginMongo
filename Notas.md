# Observacións

## .json()

Este míddelware, utilízase para recibir o dato enviado por fetch en JSON no cliente:

```
envioTexto.addEventListener("click",async (e)=>{
    e.preventDefault()
    let oInput = {dato:texto.value};//isto é un obxeto
    console.log("clico envioTexto e o valor é: ",oInput)
    let datoEnvio = {
        method:'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(oInput)
    }
   await fetch('/texto',datoEnvio)
    
})
```
A continuación poño un código do servidor:
```
// para datos en JSON en body
app.use(express.json());
```

## urlencoded 

Este middleware utilízase para recibir o dato do formulario no cliente: 


```
envioForm.addEventListener("click",async (e)=>{
    e.preventDefault()
    console.log("clico envioForm")
    let datoEnvio = {
        method:'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new FormData(datosForm)
    } 
    
   await fetch('/logueo',datoEnvio)
    
})
```

E no servidor usumos o seguinte código:

```
 // para headers: application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: true }));
```

## Instalando o módulo `express-fileupload`

Cando instalamos este módulo, fará o traballo de interpretar ou transformar o `corpo` da mensaxe no `servidor`. 

No cliente deberemos enviar dito evento da seguinte maneira:


```javascript

envioForm.addEventListener("click",async (e)=>{
    e.preventDefault()
    console.log("clico envioForm")
    let datoEnvio = {
        method:'POST',
        body: new FormData(datosForm)
    } 
    
   await fetch('/logueo',datoEnvio)
    
})
```

E no servidor, deberemos usar o middleware do seguinte xeito, introducindoo ao comenzo do programa.

```javascript
const fileupload = require("express-fileupload");
...
app.use(fileupload())
```


## Observación no código do botón e input con texto

Neste código é indispensable colocar a cabeceira de `headers`:

```javascript
envioTexto.addEventListener("click",async (e)=>{
    e.preventDefault()
    let oInput = {dato:texto.value};//isto é un obxeto
    console.log("clico envioTexto e o valor é: ",oInput)
    let datoEnvio = {
        method:'POST',
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify(oInput)
    }
   await fetch('/texto',datoEnvio)
    
})
```
Se nos non puxéramos a cabeceira seguinte:
```javascript
 headers: {
            "Content-Type": "application/json"
        }
```

NON VERÍAMOS NO SERVIDOR O DATO ENVIADO. Podedes facer probas poñéndoo ou non para velas diferencias. ¿Qué ocorre nese endpoint asociado no server?
