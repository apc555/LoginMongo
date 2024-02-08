envioForm.addEventListener("click",async (e)=>{
    e.preventDefault()
    console.log("clico envioForm")
    let datoEnvio = {
        method:'POST',
      
       /*  headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }, */
        
        body: new FormData(datosForm)
    } 
    
   await fetch('/logueo',datoEnvio)
    
})

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