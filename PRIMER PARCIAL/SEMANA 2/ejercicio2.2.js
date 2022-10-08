const { tutor,tutoria } = require('./datos')


//funcion de busqueda utilizando la estructura Async/Await//
console.log("FUNCION CON ESTRUCTURA Async/Await")
async function findTutorias2ForId(id){
    const tutorias = tutoria.find((tutorias)=> tutorias.id===id );
    if (!tutorias)
    {
        const error =  new Error();
        error.message="Tutoria no encontrada";
        throw error;
    }
    return tutorias;
}

async function findTutor2ForId(id){
    const tutores =  tutor.find((tutores)=>{
        return tutores.id===id;
    });
    if (!tutores)
    {
        const error = new Error();
        error.message="Tutor no encontrado";
        throw error;
    }
    return tutores;
}

(async ()=>{
    try
    {
        const tutorias  =   await findTutorias2ForId(4);
        const tutores =   await  findTutor2ForId(tutorias.idtutor);
        tutorias.tutores = tutores;
        console.log(tutorias)
        console.log(tutores)
    }
    catch (err)
    {
        console.log(err.message)
    }
}
)();