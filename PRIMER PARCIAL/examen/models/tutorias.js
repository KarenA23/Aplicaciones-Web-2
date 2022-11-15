const { model, Schema } = require('mongoose');

const TutoriasSchema = Schema(
    {
        idtutorado:{
            type: Number,
            default:0
        },
        idtutoria:{
            type: Number,
            default:0
        },
        asignatura:{
            type: String,
            required: [ true, 'La asigntaura es obligatoria'],
            unique:true
        },
        ndehoras:{
            type: Number,
            default:0
        },
        fecha:{
            type: String,
            required: [ true, 'La fecha es obligatoria'],
            unique:true
        },
        hora:{
            type: String,
            required: [ true, ' La hora es boligatoria'],
            unique:true
        },

    }
);

TutoriasSchema.methods.toJSON = function(){
    const { __v,  status,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('Tutorias', TutoriasSchema );