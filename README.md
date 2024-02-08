# Lectura previa

Este código é para entender as diferencias de envío de datos o servidor dende o cliente.

Lee o documento de Notas.md

A continuación analiza os códigos do servidor e cliente.

> Lembrar que os formularios que levan `action` e `method` non levan funcións asociadas no `index.js`, de maneira nativa, executa a acción facendo o endpoint e recibindo os datos no `servidor`.

> A través dos atributos `action` e `method`, a ***url*** vese modificada co valor de ***action***, non así con ***fetch***, que esta función é executada e dirixe os datos a través do endpoint asociado.

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
