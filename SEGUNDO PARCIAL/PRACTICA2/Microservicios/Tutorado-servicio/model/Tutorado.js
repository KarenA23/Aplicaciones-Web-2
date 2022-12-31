const { Schema, model } = require("mongoose");

const TutoradoSchema = Schema({
    Nombre: {
        type: String,
        required:[true, 'El campo Nombre es obligatorio']
    },

    Apellido: {
        type: String,
        required:[true, 'El campo Apellido es obligatorio']
    },

    Identificacion: {
        type: Number,
        default: 0
    },

    Carrera: {
        type: String,
        required:[true, 'El campo Carrera es obligatorio']
    },
})

module.exports= model('Tutorado', TutoradoSchema)