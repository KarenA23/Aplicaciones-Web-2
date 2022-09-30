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

const tutorado=[
    {
        id:1,
        nombre:"Emilia",
        apellido:"Paz",
        identificacion:13176532320,
        carrera: "Ingeniería en Sistemas"
    },
    {
        id:2,
        nombre:"Guillermo",
        apellido:"Villa",
        identificacion:13098983200,
        carrera: "Ingeniería en Tecnologías de la Información"
    },
    {
        id:3,
        nombre:"Alisson",
        apellido:"Plaza",
        identificacion:13076121292,
        carrera: "Ingeniería en Sistemas"
    },
    {
        id:4,
        nombre:"Juliana",
        apellido:"Bermudez",
        identificacion:13176723232,
        carrera: "Ingeniería en Software"
    },
    {
        id:5,
        nombre:"Oswaldo",
        apellido:"Solórzano",
        identificacion:1309274430,
        carrera: "Ingeniería en Tecnologías de la Información"
    },
]

const tutoria=[
    {
        id:1,
        idtutor:1,
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


for (const iterator of tutoria){
    console.log(`TUTOR`);
    console.log(`Asignatura: ${iterator.asignatura}`);   
    tutoresAux=tutor.find(al=>al.id==iterator.idtutor)
    console.log(`Tutor: ${tutoresAux.nombre} ${tutoresAux.apellido}\nIdentificacion: ${tutoresAux.identificacion}\nExperticia: ${tutoresAux.experticia}\n`);
}

for (const elemento in tutorado){
    console.log(`TUTORADO`);
    console.log(`ID tutorado: ${tutorado[elemento].id}\nTutorado: ${tutorado[elemento].nombre} ${tutorado[elemento].apellido}\nIdentificacion: ${tutorado[elemento].identificacion}\nCarrera: ${tutorado[elemento].carrera}\n`) 
}

tutoria.forEach((elemento)=>{
    console.log(`TUTORIA`);
    console.log(`ID de la tutoria: ${elemento.id}\nID del tutor: ${elemento.idtutor}\nID del tutorado: ${elemento.idtutorado}
    Asignatura: ${elemento.asignatura} Numero de Horas: ${elemento.ndehoras}
    Fecha: ${elemento.fecha} Hora: ${elemento.hora}`)
    console.log("")
})



