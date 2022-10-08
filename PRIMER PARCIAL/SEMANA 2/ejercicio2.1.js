const { tutor,tutoria } = require('./datos')

//funcion de busqueda utilizando la estructura Promises//
console.log("FUNCION CON ESTRUCTURA PROMISES")
function findTutoriaForId(id){
    return new Promise((resolve, reject)=>{
        const tutorias = tutoria.find((tutorias)=> tutorias.id===id );
        if (!tutorias)
        {
            const error= new Error();
            error.message="Tutoria no encontrada";
            reject(error);
        }
        resolve(tutorias);
    })
}

function findTutorForId(id){
    return new Promise((resolve, reject)=>{
        const tutores =  tutor.find((tutores)=>{
            return tutores.id===id;
        });
        if (!tutores)
        {
            const error =  new Error();
            error.message="Tutor no encontrado";
            reject(error);
        }
        resolve(tutores);
    })
}

findTutoriaForId(5)
.then((tutorias)=>{ 
    console.log(tutorias);
    return findTutorForId(tutorias.idtutor);
})
.then((tutores)=>{
    console.log(tutores)
})
.catch((error)=>{
    console.log(error.message)
})