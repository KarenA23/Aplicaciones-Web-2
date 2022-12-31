const { Schema, model } = require("mongoose");

const TutorSchema = Schema({
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

    Experticia: {
        type: String,
        required:[true, 'El campo Experticia es obligatorio']
    },
})

module.exports= model('Tutor', TutorSchema)