async function fActualizarDatos(req,res){
    
        
    try {
       console.log('req.body: ',req.body)
       await cliente.connect();
       // BBDD y coleccion van aqui
       //const { id } = req.params;
      
       const db = cliente.db(database);
       const coll = db.collection(coleccion);
       const filtro = {
           _id: parseInt(req.body.id)
       }
       const dato = {
           $set: req.body.campos,
         }
       const result = await coll.updateOne(filtro,dato);
       console.log("Number of documents updated: " + result.modifiedCount,result);
       
       console.log('Resuldato de borrado de dato',result) 
   } finally {
       //asegurar q el cliente cierra cuando acaba/error
       
       await cliente.close();
 
   } 
}

export { fActualizarDatos }