const mongoose = require('mongoose');

const conexionBaseDatos = async () =>{
    try {
        await mongoose.connect( 'mongodb://localhost:27017/tutor-servicio',  {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Base de Datos corriendo');
    } catch (error) {
        console.log(error);
        throw new Error('Error en la base de datos')
    }
}

module.exports={
    conexionBaseDatos
}