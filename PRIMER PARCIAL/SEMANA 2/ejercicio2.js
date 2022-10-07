const tutor=[
    {
        id:1,
        nombre:"Luis",
        apellido:"Zambrano",
        identificacion:1316664604,
        experticia:"3 años"
    },
    {
        id:2,
        nombre:"Ana",
        apellido:"Torres",
        identificacion:13078765464,
        experticia:"6 años"
    },
    {
        id:3,
        nombre:"Jorge",
        apellido:"Pincay",
        identificacion:1303753618,
        experticia:"3 años"
    },
    {
        id:4,
        nombre:"Katiuska",
        apellido:"Montes",
        identificacion:1328372660,
        experticia:"8 años"
    },
    {
        id:5,
        nombre:"Daniel",
        apellido:"Campos",
        identificacion:1387266211,
        experticia:"2 años"
    },    
]

const tutoria=[
    {
        id:1,
        idtutor:6,
        idtutorado:5,
        asignatura:"Métodos numéricos",
        ndehoras:4,
        fecha:'2022-09-13',
        hora:'8:00:00 AM'
    },
    {
        id:2,
        idtutor:2,
        idtutorado:4,
        asignatura:"Interfaces y Multimedia",
        ndehoras:1,
        fecha:'2022-09-11',
        hora:'5:00:00 PM'
    },
    {
        id:3,
        idtutor:3,
        idtutorado:3,
        asignatura:"Algebra Lineal",
        ndehoras:2,
        fecha:'2022-09-18',
        hora:'6:00:00 PM'
    },
    {
        id:4,
        idtutor:4,
        idtutorado:2,
        asignatura:"Matemáticas Discretas",
        ndehoras:1,
        fecha:'2022-09-11',
        hora:'10:00:00 AM'
    },
    {
        id:5,
        idtutor:4,
        idtutorado:1,
        asignatura:"Minería de Datos",
        ndehoras:1,
        fecha:'2022-09-05',
        hora:'11:00:00 AM'
    },
]


function findTutoriaForId(id){
    return new Promise((resolve, reject)=>{
        const tutorias = tutoria.find((tutorias)=> tutorias.id===id );
        if (!tutorias)
        {
            const error= new Error();
            error.message="La tutoria no fue encontrado";
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
            error.message="No pudimos encontrar el tutor";
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
