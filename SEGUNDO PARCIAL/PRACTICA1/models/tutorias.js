const { model, Schema } = require('mongoose');

const TutoriasSchema = Schema(
    {
        idtutorado:{
            type: Number,
            default:0
        },
        idtutor:{
            type: Number,
            default:0
        },
        asignatura:{
            type: String,
            required: [ true, 'La asigntaura es obligatoria'],
        },
        ndehoras:{
            type: Number,
            default:0
        },
        fecha:{
            type: String,
            required: [ true, 'La fecha es obligatoria'],
        },
        hora:{
            type: String,
            required: [ true, ' La hora es boligatoria'],
        },
    }
);

module.exports = model('Tutorias', TutoriasSchema );