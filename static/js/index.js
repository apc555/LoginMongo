
function listenerApellidos(){
    let queryDeID = document.getElementById("datosForm");
    console.log("Elemento 1:", queryDeID)
        if (queryDeID != undefined) {
            console.log("Query id datosForm exitoso")
            envioForm.addEventListener("click",async (e)=>{
                e.preventDefault()
                console.log("clico envioForm")
                let datoEnvio = {
                    method:'POST',
                
                    /* headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    }, */ 
                    
                    body: new FormData(datosForm)
                } 
            await fetch('/logueo',datoEnvio)
            })

        }
}

function listenerFormTexto(){
    let queryDeID = document.getElementById("envioTexto");
    console.log("Elemento 2:", queryDeID)
        if (queryDeID != undefined) {
            console.log("query id envioTexto exitoso")
        envioTexto.addEventListener("click",async (e)=>{
            e.preventDefault()
            let oInput = {
                datosInput: texto.value
            };//isto é un obxeto
            console.log("clico envioTexto e o valor é: ",oInput)
            let datoEnvio = {
                method:'POST',
                headers: {
                    "Content-Type": "application/json"
                },  // indica JSON no header para q o entenda o server
                body: JSON.stringify(oInput)
            }
        await fetch('/texto',datoEnvio)
            
        })

    }
}

// Funciones q solo preparan EventListener si encuentran el id correspondiente
listenerApellidos(); 
listenerFormTexto();