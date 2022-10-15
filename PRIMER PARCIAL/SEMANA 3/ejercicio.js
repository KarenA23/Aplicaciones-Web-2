const mongoose = require('mongoose');
const connectionURL= "mongodb+srv://karen:karen1234@cluster0.mq5l2es.mongodb.net/prueba";

( async ()=>{
    try {
        const conexion = await mongoose.connect(connectionURL)
        const tutor = mongoose.model("Tutor", 
        { 
            nombre:String, 
            apellido:String, 
            identificacion:String, 
            experticia:String,
        });

        const tutor1 = new tutor (
            {
                nombre: "Luis", 
                apellido: "Zambrano", 
                identificacion: "1316664604", 
                experticia: "3 años"
            }
        )
        const guardarTutor1 = await tutor1.save()

        const tutor2 = new tutor (
            {
                nombre: "Ana", 
                apellido: "Torres", 
                identificacion: "13078765464", 
                experticia: "6 años"
            }
        )
        const guardarTutor2 = await tutor2.save()

        const tutor3 = new tutor (
            {
                nombre: "Jorge", 
                pellido: "Pincay", 
                identificacion: "1303753618", 
                experticia: "3 años"
            }
        )
        const guardarTutor3 = await tutor3.save()

        const tutor4 = new tutor (
            {
                nombre: "Katiuska", 
                apellido: "Montes", 
                identificacion: "1328372660", 
                experticia: "8 años"
            }
        )
        const guardarTutor4 = await tutor4.save()

        const tutor5 = new tutor (
            {
                nombre: "Daniel", 
                apellido: "Campos", 
                identificacion: "1387266211", 
                experticia: "2 años"
            }
        )
        const guardarTutor5 = await tutor5.save()


        console.log("Se guardo con exito: ", guardarTutor1)
        console.log("Se guardo con exito: ", guardarTutor2)
        console.log("Se guardo con exito: ", guardarTutor3)
        console.log("Se guardo con exito: ", guardarTutor4)
        console.log("Se guardo con exito: ", guardarTutor5)

        const resultadotutor = await tutor.find()
        for(elementos of resultadotutor){
            console.log(elementos);
        }
    
    
        const tutorado = mongoose.model("Tutorado", 
        { 
            nombre:String, 
            apellido:String, 
            identificacion:String, 
            carrera:String,
        });

        const tutorado1 = new tutorado (
            {
                nombre: "Emilia", 
                apellido: "Paz", 
                identificacion: "13176532320", 
                carrera: "Ingeniería en Sistemas"
            }
        )
        const guardarTutorado1 = await tutorado1.save()

        const tutorado2 = new tutorado (
            {
                nombre: "Guillermo", 
                apellido: "Villa", 
                identificacion: "13098983200", 
                carrera: "Ingeniería en Tecnologías de la Información"
            }
        )
        const guardarTutorado2 = await tutorado2.save()

        const tutorado3 = new tutorado (
            {
                nombre: "Allison", 
                apellido: "Plaza", 
                identificacion: "13076121292", 
                carrera: "Ingeniería en Sistemas"
            }
        )
        const guardarTutorado3 = await tutorado3.save()

        const tutorado4 = new tutorado (
            {
                nombre: "Juliana", 
                apellido: "Bermudez", 
                identificacion: "13176723232", 
                carrera: "Ingeniería en Software"
            }
        )
        const guardarTutorado4 = await tutorado4.save()

        const tutorado5 = new tutorado (
            {
                nombre: "Oswaldo", 
                apellido: "Solórzano", 
                identificacion: "1309274430", 
                carrera: "Ingeniería en Tecnologías de la Información"
            }
        )
        const guardarTutorado5 = await tutorado5.save()

        console.log("Se guardo con exito: ", guardarTutorado1)
        console.log("Se guardo con exito: ", guardarTutorado2)
        console.log("Se guardo con exito: ", guardarTutorado3)
        console.log("Se guardo con exito: ", guardarTutorado4)
        console.log("Se guardo con exito: ", guardarTutorado5)

        const resultadotutorado = await tutorado.find()
        for(elementos in resultadotutorado){
            console.log(resultadotutorado[elementos]);
        }


        const tutoria = mongoose.model("Tutoria", 
        {
            idtutor: { type: mongoose.Types.ObjectId , ref:"Tutor"},
            idtutorado: { type: mongoose.Types.ObjectId , ref:"Tutorado" },
            asignatura: String,
            ndehoras: String,
            fecha: String,
            hora: String,
        });

        const tutoria1 = new tutoria (
            {
                idtutor: guardarTutor1._id,
                idtutorado: guardarTutorado5._id,
                asignatura:"Métodos numéricos",
                ndehoras:4,
                fecha:'2022-09-13',
                hora:'8:00:00 AM'
            }
        )
        const guardarTutoria1= await tutoria1.save()

        const tutoria2 = new tutoria (
            {
                idtutor: guardarTutor2._id,
                idtutorado: guardarTutorado4._id,
                asignatura:"Interfaces y Multimedia",
                ndehoras:1,
                fecha:'2022-09-11',
                hora:'5:00:00 PM'
            }
        )
        const guardarTutoria2= await tutoria2.save()


        const tutoria3 = new tutoria (
            {
                idtutor: guardarTutor3._id,
                idtutorado: guardarTutorado3._id,
                asignatura:"Algebra Lineal",
                ndehoras:2,
                fecha:'2022-09-18',
                hora:'6:00:00 PM'
            }
        )
        const guardarTutoria3= await tutoria3.save()

        const tutoria4 = new tutoria (
            {
                idtutor: guardarTutor4._id,
                idtutorado: guardarTutorado2._id,
                asignatura:"Métodos numéricos",
                ndehoras:4,
                fecha:'2022-09-13',
                hora:'8:00:00 AM'
            }
        )
        const guardarTutoria4= await tutoria4.save()


        const tutoria5 = new tutoria (
            {
                idtutor: guardarTutor4._id,
                idtutorado: guardarTutorado1._id,
                asignatura:"Minería de Datos",
                ndehoras:1,
                fecha:'2022-09-05',
                hora:'11:00:00 AM'
            }
        )
        const guardarTutoria5= await tutoria5.save()

        console.log("Se guardo con exito: ", guardarTutoria1)
        console.log("Se guardo con exito: ", guardarTutoria2)
        console.log("Se guardo con exito: ", guardarTutoria3)
        console.log("Se guardo con exito: ", guardarTutoria4)
        console.log("Se guardo con exito: ", guardarTutoria5)

        const resultadotutoria = await tutoria.find()
        let iterador=0;
        while(iterador < resultadotutoria.length){
            console.log( resultadotutoria[iterador]);
            iterador++;
        }
} catch (error) {
    console.log(error.message);       
}
})();




 
        
    


        

